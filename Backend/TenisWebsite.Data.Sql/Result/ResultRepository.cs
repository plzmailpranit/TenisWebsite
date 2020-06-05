using System;
using System.Collections.Generic;
using System.Text;
using TenisWebsite.IData.Result;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
using TenisWebsite.Data.Sql.DAO;
using TenisWebsite.Domain.Result;

namespace TenisWebsite.Data.Sql.Result
{
    public class ResultRepository:IResultRepository
    {
        private readonly TenisWebsiteDbContext _context;

        public ResultRepository(TenisWebsiteDbContext context)
        {
            _context = context;

        }
        public async Task<CompetitorPosition> DisplayCompetitorPosition(string userId)
        {
            var user = await _context.CompetitorData.Where(x => x.UserId == userId).FirstOrDefaultAsync();
            var legue = await _context.League.Where(x => x.LeagueId == user.LeagueId).Select(x=>x.Name).SingleOrDefaultAsync() ;
            var leguePosition = await _context.LeagueTable.Where(x => x.CompetitorDataId == user.CompetitorDataId).Select(x=>x.Position).SingleOrDefaultAsync();
            var rankingPosition = await _context.RankingTable.Where(x => x.CompetitorDataId == user.CompetitorDataId).Select(x => x.Position).SingleOrDefaultAsync();
            CompetitorPosition competitorPosition = new CompetitorPosition
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                LeaugeName = legue,
                LeguePosition = leguePosition,
                RankingPosition = rankingPosition
            };
            return competitorPosition;   
        }

        public async Task<List<Domain.Result.CompetitorData>> DisplayCompetitor(string userId)
        {
            var user = await _context.CompetitorData.Where(x => x.UserId == userId).FirstOrDefaultAsync();
            var result =await _context.CompetitorData.Where(x => x.LeagueId == user.LeagueId && x.CompetitorDataId != user.CompetitorDataId).ToListAsync();
            var TheListOfObjectsB = result.Select(a => new Domain.Result.CompetitorData () { CompetitorId=a.CompetitorDataId,FirstName=a.FirstName,LastName= a.LastName }).ToList();
            return TheListOfObjectsB;
        }
        public async Task<int> AddResult(Domain.Result.Result result, string userId)
        {
            string[] resultScoreset1 = result.Set1.Split(":");
            string[] resultScoreset2 = result.Set2.Split(":");
            string[] resultScoreset3= null;
            if (!CheckResult(resultScoreset1)||!CheckResult(resultScoreset2)) return -1;
            if (result.Set3 != null)
            {
                
                resultScoreset3 = result.Set3.Split(":");
                if (!CheckResult(resultScoreset3)) return -1;
            }
            var player1=await _context.CompetitorData.Where(x => x.UserId == userId).FirstOrDefaultAsync();
            var player2 =await _context.CompetitorData.Where(x => x.CompetitorDataId == result.Enemy).FirstOrDefaultAsync();
            if (result.League != 0 && (player1.LeagueId != result.League || player2.LeagueId != result.League)) return -2;
            DAO.Match match = new DAO.Match
            {
                Competitor1Set1 = Int32.Parse(resultScoreset1[0]),
                Competitor2Set1 = Int32.Parse(resultScoreset1[1]),
                Competitor1Set2 = Int32.Parse(resultScoreset2[0]),
                Competitor2Set2 = Int32.Parse(resultScoreset2[1]),
                Competitor1 = player1.CompetitorDataId,
                Competitor2 = player2.CompetitorDataId,
                Confirmation = false,
                Protest = false,
                AddingTime = DateTime.Now
            };
            if(resultScoreset3 != null)
            {
                match.Competitor1Set3 = Int32.Parse(resultScoreset3[0]);
                match.Competitor2Set3 = Int32.Parse(resultScoreset3[1]);
            }
            await _context.AddAsync(match);
            await _context.SaveChangesAsync();
            UpdateTable(match);
            return 0;
        }
        private static void Swap<T>(ref T lhs, ref T rhs)
        {
            T temp = lhs;
            lhs = rhs;
            rhs = temp;
        }
        private async void UpdateTable(DAO.Match match)
        {
            var competitor1 =await _context.LeagueTable.Where(x => x.CompetitorDataId == match.Competitor1).FirstOrDefaultAsync();
            var competitor2 = await _context.LeagueTable.Where(x => x.CompetitorDataId == match.Competitor2).FirstOrDefaultAsync();
            var score = CalculateScore(match);
            if (score.Item1 > score.Item2)
            {
                competitor1.MatechesWon += 1;
                competitor2.MatchesLoss += 1;
            }
            else
            {
                competitor2.MatechesWon += 1;
                competitor1.MatchesLoss += 1;
            }
            competitor1.SetsWon += score.Item1;
            competitor1.SetsLoss += score.Item2;
            competitor2.SetsWon += score.Item2;
            competitor2.SetsLoss += score.Item1;
            competitor1.Points += score.Item1;
            competitor2.Points += score.Item2;
            if (score.Item1 > score.Item2) match.Winner = competitor1.CompetitorDataId;
            else match.Winner = competitor2.CompetitorDataId;

            await _context.SaveChangesAsync();
            var tables = await _context.LeagueTable.Where(x => x.LeagueId == match.CompetitorWinner.LeagueId).OrderBy(x => x.Position).ToListAsync();
            changeTablePosition(tables);
            await _context.SaveChangesAsync();

        }
        private void changeTablePosition(List<LeagueTable> leagueTables)
        {
            leagueTables=leagueTables.OrderByDescending(a => a.Points).ThenByDescending(a => a.MatechesWon).ToList();
            int posttion = 1;
            leagueTables[0].Position = posttion;
            for(int i = 1; i < leagueTables.Count; ++i)
            {
                if(leagueTables[i-1].Points != leagueTables[i].Points || leagueTables[i - 1].MatechesWon != leagueTables[i].MatechesWon)
                {
                    posttion = i + 1;
                }
                leagueTables[i].Position = posttion;

            }

        }
        private static (int, int) CalculateScore(DAO.Match match)
        {
            int player1=0 , player2 = 0;
            if (match.Competitor1Set1 > match.Competitor2Set1) ++player1;
            else ++player2;
            if (match.Competitor1Set2 > match.Competitor2Set2) ++player1;
            else ++player2;
            if (match.Competitor2Set3 != 0)
            {
                if (match.Competitor1Set3 > match.Competitor2Set3) ++player1;
                else ++player2;
            }
            return (player1, player2);

        }
        private static bool CheckResult(string[] score)
        {
           
            uint score1=0, score2=0;
            bool ResultCorrect= true;
            if (score.Length != 2) ResultCorrect = false;
            if(ResultCorrect) ResultCorrect = UInt32.TryParse(score[0],out score1);
            if (ResultCorrect) ResultCorrect = UInt32.TryParse(score[1], out score2);
            if (ResultCorrect)
            { 
                if (score2 > score1) Swap<uint>(ref score1, ref score2);
                if (score1 == 6)
                {
                    if (score2 > score1 - 2) return false;
                }
                else if (score1 == 7)
                {
                    if (score2 != score1-1 && score2 != score1 - 2) return false;
                }
                else return false;
            }
            return ResultCorrect;
        }

       
    }
}
