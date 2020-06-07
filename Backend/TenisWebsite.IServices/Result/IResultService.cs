using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TenisWebsite.IServices.Request;
using TenisWebsite.Domain.Result;

namespace TenisWebsite.IServices.Result
{
    public interface IResultService
    {
        Task<int> AddNewResult(AddResult addResult, string userId);
        Task<List<CompetitorData>> DisplaycompetitorData(string userId);
        Task<List<CompetitorData>> DisplaycompetitorRankingData(string userId); 
        Task<CompetitorPosition> DisplayCompetitorName(string userId);
        Task<List<LeagueTable>> GetTableLegue(int LegueNumber);
        Task<List<RankingTable>> GetTableRanking();
        Task<List<DisplayLastMatches>> GetLastMatches(string userId);
        Task<List<DisplayLastMatchesAll>> GetLastMatchesAll();
    }
}
