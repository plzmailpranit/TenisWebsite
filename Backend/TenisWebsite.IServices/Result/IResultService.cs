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
        Task<CompetitorPosition> DisplayCompetitorName(string userId);
    }
}
