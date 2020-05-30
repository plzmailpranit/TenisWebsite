using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TenisWebsite.IData.Code
{
    public interface ICodeRepository
    {
        Task<int> AddCode(Domain.Code.Code code);
    }
}
