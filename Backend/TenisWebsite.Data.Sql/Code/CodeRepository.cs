using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TenisWebsite.Data.Sql.DAO;
using TenisWebsite.IData.Code;

namespace TenisWebsite.Data.Sql.Code
{
    public class CodeRepository : ICodeRepository
    { 
        private readonly TenisWebsiteDbContext _context;

        public CodeRepository(TenisWebsiteDbContext context)
        {
            _context = context;
        }

        public async Task<int> AddCode(Domain.Code.Code code)
        {
            var legueExist = _context.League.Where(b => b.LeagueId == code.LegueId).FirstOrDefault();
            if (legueExist == null && code.LegueId != 0) return -1;
            var competitor = new DAO.CompetitorData
            {
                FirstName = code.FirstName,
                LastName = code.LastName,
                LeagueId = code.LegueId,
            };
           await _context.AddAsync(competitor);
           await _context.SaveChangesAsync();
            if (code.LegueId != 0)
            {
                var LastPLayer = _context.LeagueTable.OrderBy(k => k.Points).FirstOrDefault();
                int position = 1;
                if (LastPLayer != null)
                {
                    position = LastPLayer.Position;
                    if (LastPLayer.Points != 0) position += 1;
                }
                LeagueTable league = new LeagueTable()
                {
                    CompetitorDataId = competitor.CompetitorDataId,
                    MatechesWon = 0,
                    MatchesLoss = 0,
                    SetsWon = 0,
                    SetsLoss = 0,
                    Points = 0,
                    Position = position,
                    LeagueId = code.LegueId

                };
                await _context.AddAsync(league);
               
            }
            if (code.Competition)
            {
                var LastPLayer = _context.RankingTable.OrderByDescending(k => k.Position).FirstOrDefault();
                int position = 1;
                if (LastPLayer != null) position = LastPLayer.Position + 1;
                RankingTable league = new RankingTable()
                {
                    CompetitorDataId = competitor.CompetitorDataId,
                    MatechesWon = 0,
                    MetchesLoss = 0,
                    Position = position

                };
                await _context.AddAsync(league);

            }

            await _context.SaveChangesAsync();
            return competitor.CompetitorDataId;
        }
    }
}
