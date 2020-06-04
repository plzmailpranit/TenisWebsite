using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TenisWebsite.IServices.Request;

namespace TenisWebsite.IServices.Result
{
    public interface IResultService
    {
        Task<int> AddNewResult(AddResult addResult, string userId);
    }
}
