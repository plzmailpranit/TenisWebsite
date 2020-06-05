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
        public async Task<CompetitorPosition> DisplayCompetitorName(string userId)
        {

            var table = await _resultRepository.DisplayCompetitorPosition(userId);
            return table;
        }
    }
}
