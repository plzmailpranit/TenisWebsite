using System;
using System.Collections.Generic;
using System.Text;
using TenisWebsite.IServices.Result;
using System.Threading.Tasks;
using TenisWebsite.IServices.Request;
using TenisWebsite.IData.Result;
using TenisWebsite.Domain.Result;

namespace TenisWebsite.Services.Result
{

    public class ResultService : IResultService
    {
        private readonly IResultRepository _resultRepository;

        public ResultService(IResultRepository resultepository)
        {
            _resultRepository = resultepository;
        }

        public async Task<int> AddNewResult(AddResult addResult, string userId)
        {
            var Result = new Domain.Result.Result(addResult.enemy, addResult.set1, addResult.set2, addResult.set3, addResult.league);
            int Id = await _resultRepository.AddResult(Result, userId);
            return Id;
        }
        public async Task<List<CompetitorData>> DisplaycompetitorData(string userId)
        {
            var table = await _resultRepository.DisplayCompetitor(userId);
            return table;
        }
        public async Task<List<CompetitorData>> DisplaycompetitorRankingData(string userId)
        {
            var table = await _resultRepository.DisplayCompetitorRanking(userId);
            return table;
        }
        public async Task<CompetitorPosition> DisplayCompetitorName(string userId)
        {
            var table = await _resultRepository.DisplayCompetitorPosition(userId);
            return table;
        }
        public async Task<List<LeagueTable>> GetTableLegue(int LegueNumber)
        {
            var table = await _resultRepository.GetLegueTable(LegueNumber);
            return table;
        }
        public async Task<List<RankingTable>> GetTableRanking()
        {
            var table = await _resultRepository.GetRankingTable();
            return table;
        }
        public async Task<List<DisplayLastMatches>> GetLastMatches(string userId)
        {
            var table = await _resultRepository.GetLastMatch(userId);
            return table;
        }
        public async Task<List<DisplayLastMatchesAll>> GetLastMatchesAll()
        {
            var table = await _resultRepository.GetLastMatchAll();
            return table;
        }
    }
}
