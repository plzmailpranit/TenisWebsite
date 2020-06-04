using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using TenisWebsite.IServices.Code;
using TenisWebsite.Data.Identity;
using TenisWebsite.Data.Identity.DAO;
using Microsoft.AspNetCore.Authorization;
using TenisWebsite.Api.ViewModel;

namespace TenisWebsite.Api.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/code")]
    [EnableCors()]
    public class CodeController:Controller
    {
        private readonly UserManager<IdentityUser> _userManger;
        private readonly ICodeService _codeService;
        private readonly IdentityDbContext _identityDbContext;
        public CodeController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, ICodeService codeService, IdentityDbContext identityDbContext)
        {
            _userManger = userManager;
            _codeService = codeService;
            _identityDbContext = identityDbContext;
        }

        [Route("AddNewCompetitor", Name = "AddNewCompetitor")]
        [HttpPost]
       [Authorize(Roles = "Administrator, Admin")]
        public async Task<IActionResult> AddNewCompetitor([FromBody] IServices.Request.AddCompetitor competitor)
        {
            List<string> errors = new List<string>();


            var code = _identityDbContext.AuthorizationCode.Where(x => x.Key == competitor.confirmationCode).FirstOrDefault();
            if (code != null) errors.Add("Code Already Exist");
            else 
                {
                    int result = await _codeService.CreateCode(competitor);
                    if (result == -1) errors.Add("Legue Not Exist");
                    else if (result < 0) errors.Add("Unknow Error");
                    else
                    {

                        AuthorizationCode authorization = new AuthorizationCode
                        {
                            Key = competitor.confirmationCode,
                            CompetitorId = result
                        };

                        await _identityDbContext.AddAsync(authorization);
                        await _identityDbContext.SaveChangesAsync();

                    }
                }
            if (errors.Count == 0)
            {
                UserViewModel userViewModel = new UserViewModel
                {
                    Status = "Succes"
                };
                return Ok(userViewModel);
            }
            else
            {
                UserViewModel userViewModel = new UserViewModel
                {
                    Status = "Error",
                    Errors = errors.ToArray()
                };
                return BadRequest(userViewModel);
            }
        }
    }
}
