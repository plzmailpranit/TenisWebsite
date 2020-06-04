using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TenisWebsite.IData.Result
{
    public interface IResultRepository
    {
        Task<int> AddResult(Domain.Result.Result result, string userId);
    }
}
