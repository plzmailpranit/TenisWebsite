using System;
using System.Collections.Generic;
using System.Text;
using TenisWebsite.Domain.Code;
using System.Threading.Tasks;
using TenisWebsite.IServices.Request;

namespace TenisWebsite.IServices.Code
{
    public interface ICodeService
    {
        Task<int> CreateCode(AddCompetitor addCompetitor);
    }
}

