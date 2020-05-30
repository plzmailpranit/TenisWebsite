using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TenisWebsite.IServices.Code;
using TenisWebsite.IData.Code;
using TenisWebsite.IServices.Request;

namespace TenisWebsite.Services.Code
{
    public class CodeService: ICodeService
    {
        private readonly ICodeRepository _codeRepository;

        public CodeService(ICodeRepository codeRepository)
        {
            _codeRepository = codeRepository;
        }

        public async Task<int> CreateCode(AddCompetitor addCompetitor)
        {
            var Code = new Domain.Code.Code(addCompetitor.confirmationCode, addCompetitor.firstName, addCompetitor.lastName,addCompetitor.legueId,addCompetitor.Ranking);
            int Id = await _codeRepository.AddCode(Code);
            return Id;
        }
    }
}
