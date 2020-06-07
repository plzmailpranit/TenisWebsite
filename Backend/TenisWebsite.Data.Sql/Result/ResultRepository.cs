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
using Org.BouncyCastle.Cms;

namespace TenisWebsite.Data.Sql.Result
{
    public class ResultRepository : IResultRepository
    {
        private readonly TenisWebsiteDbContext _context;

        public ResultRepository(TenisWebsiteDbContext context)
        {
            _context = context;

        }
        public async Task<CompetitorPosition> DisplayCompetitorPosition(string userId)
        {
            var user = await _context.CompetitorData.Where(x => x.UserId == userId).FirstOrDefaultAsync();
            var legue = await _context.League.Where(x => x.LeagueId == user.LeagueId).Select(x => x.Name).SingleOrDefaultAsync();
            var leguePosition = await _context.LeagueTable.Where(x => x.CompetitorDataId == user.CompetitorDataId).Select(x => x.Position).SingleOrDefaultAsync();
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
            var result = await _context.CompetitorData.Where(x => x.LeagueId == user.LeagueId && x.CompetitorDataId != user.CompetitorDataId).ToListAsync();
            var TheListOfObjectsB = result.Select(a => new Domain.Result.CompetitorData() { CompetitorId = a.CompetitorDataId, FirstName = a.FirstName, LastName = a.LastName }).ToList();
            return TheListOfObjectsB;
        }
        public async Task<List<Domain.Result.CompetitorData>> DisplayCompetitorRanking(string userId)
        {
            var user = await _context.CompetitorData.Where(x => x.UserId == userId).FirstOrDefaultAsync();
            var rankingPLayer = await _context.RankingTable.Where(x => x.CompetitorDataId == user.CompetitorDataId).FirstOrDefaultAsync();
            var rankingEnemy = await _context.RankingTable.Where(x => x.Position == rankingPLayer.Position - 1 || x.Position == rankingPLayer.Position - 2).OrderByDescending(x => x.Position).ToListAsync();
            var result = new List<DAO.CompetitorData>();
            if (rankingEnemy.Count != 0)
            {
                var Enemy1 = await _context.CompetitorData.Where(x => x.CompetitorDataId == rankingEnemy[0].CompetitorDataId).FirstOrDefaultAsync();
                if (Enemy1 != null) result.Add(Enemy1);
                if (rankingEnemy.Count == 2)
                {
                    var LastMatch = await _context.Match.Where(x => x.LeagueId == 0 && x.Competitor1 == user.CompetitorDataId).OrderByDescending(x => x.MatchId).FirstOrDefaultAsync();
                    if (!(LastMatch != null && (LastMatch.Competitor1 == rankingEnemy[1].CompetitorDataId || LastMatch.Competitor2 == rankingEnemy[1].CompetitorDataId)))
                    {
                        var Enemy2 = await _context.CompetitorData.Where(x => x.CompetitorDataId == rankingEnemy[1].CompetitorDataId).FirstOrDefaultAsync();
                        if (Enemy2 != null) result.Add(Enemy2);
                    }
                }
            }
            var TheListOfObjectsB = result.Select(a => new Domain.Result.CompetitorData() { CompetitorId = a.CompetitorDataId, FirstName = a.FirstName, LastName = a.LastName }).ToList();
            return TheListOfObjectsB;
        }
        public async Task<int> AddResult(Domain.Result.Result result, string userId)
        {
            string[] resultScoreset1 = result.Set1.Split(":");
            string[] resultScoreset2 = result.Set2.Split(":");
            string[] resultScoreset3 = null;
            if (!CheckResult(resultScoreset1) || !CheckResult(resultScoreset2)) return -1;
            if (result.Set3 != null)
            {

                resultScoreset3 = result.Set3.Split(":");
                if (!CheckResult(resultScoreset3)) return -1;
            }
            var player1 = await _context.CompetitorData.Where(x => x.UserId == userId).FirstOrDefaultAsync();
            var player2 = await _context.CompetitorData.Where(x => x.CompetitorDataId == result.Enemy).FirstOrDefaultAsync();
            if (result.League && (player1.LeagueId != player2.LeagueId)) return -2;
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
            if (resultScoreset3 != null)
            {
                match.Competitor1Set3 = Int32.Parse(resultScoreset3[0]);
                match.Competitor2Set3 = Int32.Parse(resultScoreset3[1]);
            }
            if (result.League)
            {
                match.LeagueId = player1.LeagueId;
            }
            else
            {
                match.LeagueId = 0;
            }
            await _context.AddAsync(match);
            await _context.SaveChangesAsync();
            if (result.League) UpdateTable(match);
            else ChangeRankingPosition(match);
            return 0;
        }

        private static (int, int) CalculateScore(DAO.Match match)
        {
            int player1 = 0, player2 = 0;
            if (match.Competitor1Set1 > match.Competitor2Set1) ++player1;
            else ++player2;
            if (match.Competitor1Set2 > match.Competitor2Set2) ++player1;
            else ++player2;
            if (match.Competitor1Set3 != 0 || match.Competitor2Set3 != 0)
            {
                if (match.Competitor1Set3 > match.Competitor2Set3) ++player1;
                else ++player2;
            }
            return (player1, player2);

        }
        private static bool CheckResult(string[] score)
        {

            uint score1 = 0, score2 = 0;
            bool ResultCorrect = true;
            if (score.Length != 2) ResultCorrect = false;
            if (ResultCorrect) ResultCorrect = UInt32.TryParse(score[0], out score1);
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
                    if (score2 != score1 - 1 && score2 != score1 - 2) return false;
                }
                else return false;
            }
            return ResultCorrect;
        }
        public async Task<List<Domain.Result.LeagueTable>> GetLegueTable(int legueNumber)
        {
            var legueList = await _context.LeagueTable
          .Join(
              _context.CompetitorData,
              table => table.CompetitorDataId,
              competitor => competitor.CompetitorDataId,
              (table, competitor) => new
              {
                  FirstName = competitor.FirstName,
                  LastName = competitor.LastName,
                  Point = table.Points,
                  Position = table.Position,
                  MatchesWin = table.MatechesWon,
                  MatcheLoss = table.MatchesLoss,
                  SetsWin = table.SetsWon,
                  SetsLoss = table.SetsLoss,
                  League = table.LeagueId
              }
          ).Where(x => x.League == legueNumber).OrderBy(x=>x.Position).ToListAsync();
            List<Domain.Result.LeagueTable> leagueTable = legueList.Select(a =>
                 new Domain.Result.LeagueTable()
                 {
                     FirstName = a.FirstName,
                     LasttName = a.LastName,
                     Points = a.Point,
                     Position = a.Position,
                     MatchesWin = a.MatchesWin,
                     MatchesLoss = a.MatcheLoss,
                     SetsWin = a.SetsWin,
                     SetsLoss = a.SetsLoss
                 }).ToList();
            return leagueTable;
        }

        public async Task<List<Domain.Result.RankingTable>> GetRankingTable()
        {
            var legueList = await _context.RankingTable
          .Join(
              _context.CompetitorData,
              table => table.CompetitorDataId,
              competitor => competitor.CompetitorDataId,
              (table, competitor) => new
              {
                  FirstName = competitor.FirstName,
                  LastName = competitor.LastName,
                  Position = table.Position,
                  MatchesWin = table.MatechesWon,
                  MatcheLoss = table.MetchesLoss,
              }
          ).OrderBy(x=>x.Position).ToListAsync();
            List<Domain.Result.RankingTable> leagueTable = legueList.Select(a =>
                 new Domain.Result.RankingTable()
                 {
                     FirstName = a.FirstName,
                     LasttName = a.LastName,
                     Position = a.Position,
                     MatchesWin = a.MatchesWin
                 }).ToList();
            return leagueTable;
        }
        private static void Swap<T>(ref T lhs, ref T rhs)
        {
            T temp = lhs;
            lhs = rhs;
            rhs = temp;
        }
        private async void UpdateTable(DAO.Match match)
        {
            var competitor1 = await _context.LeagueTable.Where(x => x.CompetitorDataId == match.Competitor1).FirstOrDefaultAsync();
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
            ChangeTablePosition(tables);
            await _context.SaveChangesAsync();

        }
        private void ChangeTablePosition(List<DAO.LeagueTable> leagueTables)
        {
            leagueTables = leagueTables.OrderByDescending(a => a.Points).ThenByDescending(a => a.MatechesWon).ToList();
            int posttion = 1;
            leagueTables[0].Position = posttion;
            for (int i = 1; i < leagueTables.Count; ++i)
            {
                if (leagueTables[i - 1].Points != leagueTables[i].Points || leagueTables[i - 1].MatechesWon != leagueTables[i].MatechesWon)
                {
                    posttion = i + 1;
                }
                leagueTables[i].Position = posttion;

            }
        }
        private async void ChangeRankingPosition(DAO.Match match)
        {
            var score = CalculateScore(match);
            if (score.Item1 > score.Item2) match.Winner = match.Competitor1;
            else match.Winner = match.Competitor2;
            await _context.SaveChangesAsync();
            var winner = await _context.RankingTable.Where(x => x.CompetitorDataId == match.Winner).FirstOrDefaultAsync();
            var looser = await _context.RankingTable.Where(x => (x.CompetitorDataId == match.Competitor1 || x.CompetitorDataId == match.Competitor2) && x.CompetitorDataId != match.Winner).FirstOrDefaultAsync();
            if (winner.Position == looser.Position + 1)
            {
                var LastMatch = await _context.Match.Where(x => x.MatchId != match.MatchId && match.LeagueId == 0 && x.Competitor1 == winner.CompetitorDataId).OrderByDescending(x => x.MatchId).FirstOrDefaultAsync();
                DAO.RankingTable PlayerTwoPositionHiger = null;
                if (LastMatch != null)
                {
                    PlayerTwoPositionHiger = await _context.RankingTable.Where(x => x.Position - 2 == winner.Position).FirstOrDefaultAsync();
                }
                if ((LastMatch != null && (PlayerTwoPositionHiger != null &&
                    (LastMatch.Competitor1 == PlayerTwoPositionHiger.CompetitorDataId ||
                    LastMatch.Competitor2 == PlayerTwoPositionHiger.CompetitorDataId)))
                        && LastMatch.Winner == match.Winner)
                {

                    looser.Position += 1;
                    winner.Position -= 2;
                    PlayerTwoPositionHiger.Position += 1;
                }
                else
                {
                    looser.Position += 1;
                    winner.Position -= 1;
                }

                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<DisplayLastMatches>> GetLastMatch(string userId)
        {
            var user = await _context.CompetitorData.Where(x => x.UserId == userId).FirstOrDefaultAsync();
            var lastMatches = await _context.Match
       .Join(
           _context.CompetitorData,
           match => match.Competitor1,
           competitor => competitor.CompetitorDataId,
           (match, competitor) => new
           {
               match1 = match,
               competitor1LastName = competitor.LastName,
               competitor1FirstName = competitor.FirstName
           }

       ).Join(
           _context.CompetitorData,
           match => match.match1.Competitor2,
           competitor => competitor.CompetitorDataId,
           (match1, competitor1) => new
           {
               match2 = match1,
               competitor1LastName = match1.competitor1LastName,
               competitor1FirstName = match1.competitor1FirstName,
               competitor2LastName = competitor1.LastName,
               competitor2FirstName = competitor1.FirstName

           }

       ).Where(x => x.match2.match1.Competitor1 == user.CompetitorDataId || x.match2.match1.Competitor1 == user.CompetitorDataId).OrderByDescending(x => x.match2.match1.AddingTime).Take(10).ToListAsync();
            List<DisplayLastMatches> displayLastMatches = new List<DisplayLastMatches>();
            foreach (var data in lastMatches)
            {
                DisplayLastMatches competitorPosition;
                if (data.match2.match1.Competitor1 == user.CompetitorDataId)
                {
                    competitorPosition = new DisplayLastMatches
                    {
                        ownerFirstName = data.match2.competitor1FirstName,
                        ownerLastName = data.match2.competitor1LastName,
                        enemyFirstName = data.competitor2FirstName,
                        enemyLasttName = data.competitor2LastName,
                        set1 = data.match2.match1.Competitor1Set1 + ":" + data.match2.match1.Competitor2Set1,
                        set2 = data.match2.match1.Competitor1Set2 + ":" + data.match2.match1.Competitor2Set2,
                        league = data.match2.match1.LeagueId != 0
                    };
                    if (data.match2.match1.Competitor1Set3 != 0 || data.match2.match1.Competitor2Set3 != 0)
                        competitorPosition.set3 = data.match2.match1.Competitor1Set3 + ":" + data.match2.match1.Competitor2Set3;
                }
                else
                {
                    competitorPosition = new DisplayLastMatches
                    {
                        ownerFirstName = data.competitor2FirstName,
                        ownerLastName = data.competitor2LastName,
                        enemyFirstName = data.match2.competitor1FirstName,
                        enemyLasttName = data.match2.competitor1LastName,
                        set1 = data.match2.match1.Competitor2Set1 + ":" + data.match2.match1.Competitor1Set1,
                        set2 = data.match2.match1.Competitor2Set2 + ":" + data.match2.match1.Competitor1Set2,
                        league = data.match2.match1.LeagueId != 0
                    };
                    if (data.match2.match1.Competitor1Set3 != 0 || data.match2.match1.Competitor2Set3 != 0)
                        competitorPosition.set3 = data.match2.match1.Competitor2Set3 + ":" + data.match2.match1.Competitor1Set3;
                }
                displayLastMatches.Add(competitorPosition);
            }
            return displayLastMatches;
        }

            public async Task<List<DisplayLastMatchesAll>> GetLastMatchAll()
            {
                var lastMatches = await _context.Match
           .Join(
               _context.CompetitorData,
               match => match.Competitor1,
               competitor => competitor.CompetitorDataId,
               (match, competitor) => new
               {
                   match1 = match,
                   competitor1LastName = competitor.LastName,
                   competitor1FirstName = competitor.FirstName
               }

           ).Join(
               _context.CompetitorData,
               match => match.match1.Competitor2,
               competitor => competitor.CompetitorDataId,
               (match1, competitor1) => new
               {
                   match2 = match1,
                   competitor1LastName = match1.competitor1LastName,
                   competitor1FirstName = match1.competitor1FirstName,
                   competitor2LastName = competitor1.LastName,
                   competitor2FirstName = competitor1.FirstName

               }

           ).OrderByDescending(x => x.match2.match1.AddingTime).Take(10).ToListAsync();
                List<DisplayLastMatchesAll> displayLastMatches = new List<DisplayLastMatchesAll>();
                foreach (var data in lastMatches)
                {
                    DisplayLastMatchesAll competitorPosition;

                    competitorPosition = new DisplayLastMatchesAll
                    {
                        ownerFirstName = data.match2.competitor1FirstName,
                        ownerLastName = data.match2.competitor1LastName,
                        enemyFirstName = data.competitor2FirstName,
                        enemyLasttName = data.competitor2LastName,
                        set1 = data.match2.match1.Competitor1Set1 + ":" + data.match2.match1.Competitor2Set1,
                        set2 = data.match2.match1.Competitor1Set2 + ":" + data.match2.match1.Competitor2Set2,
                        league = data.match2.match1.LeagueId
                    };
                    if (data.match2.match1.Competitor1Set3 != 0 || data.match2.match1.Competitor2Set3 != 0)
                        competitorPosition.set3 = data.match2.match1.Competitor1Set3 + ":" + data.match2.match1.Competitor2Set3;

                    displayLastMatches.Add(competitorPosition);
                }
                return displayLastMatches;
            }
        }
}
