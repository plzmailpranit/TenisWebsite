using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TenisWebsite.Domain.Result;

namespace TenisWebsite.IData.Result
{
    public interface IResultRepository
    {
        Task<int> AddResult(Domain.Result.Result result, string userId);
        Task<List<CompetitorData>> DisplayCompetitor( string userId);
        Task<List<CompetitorData>> DisplayCompetitorRanking(string userId);
        Task<CompetitorPosition> DisplayCompetitorPosition(string userId);
        Task<List<LeagueTable>>  GetLegueTable(int legueNumber);
        Task<List<RankingTable>> GetRankingTable();
        Task<List<DisplayLastMatches>> GetLastMatch(string userId);
        Task<List<DisplayLastMatchesAll>> GetLastMatchAll();
    }
}
