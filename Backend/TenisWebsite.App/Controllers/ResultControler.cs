using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TenisWebsite.IServices.Result;
using TenisWebsite.IServices.Request;
using TenisWebsite.Api.ViewModel;

namespace TenisWebsite.Api.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/Result")]
    [EnableCors()]
    public class ResultControler : Controller
    {
        private readonly UserManager<IdentityUser> _userManger;
        private readonly IResultService _resultService;
        public ResultControler(UserManager<IdentityUser>userManager,IResultService resultService)
        {
            _userManger = userManager;
            _resultService = resultService;
        }
        [Route("AddResult", Name = "AddResult")]
        [HttpPost]
        [Authorize(Roles = "Competitor")]
        public async Task<IActionResult> AddResult([FromBody] AddResult result)
        {
            var user = await _userManger.GetUserAsync(User);
            int isOk= await _resultService.AddNewResult(result, user.Id);
            var userStatus = new UserViewModel();

            if (isOk == 0)
            {
                userStatus.Status = "ok";
                return Ok(userStatus);
            }
            else if (isOk==-1)
            {
                userStatus.Errors = new string[] { "Bad Score" };
            }
            else if (isOk == -2)
            {
                userStatus.Errors = new string[] { "Bad League" };
            }
            else
            {
                userStatus.Errors = new string[] { "Unknow Errror" };
            }
            userStatus.Status = "Error";
            return BadRequest(userStatus);

        }
        [Route("ListEnemy", Name = "LiestEnemy")]
        [HttpGet]
        [Authorize(Roles = "Competitor")]
        public async Task<IActionResult> ListEnemy()
        {
            var user = await _userManger.GetUserAsync(User);
            var Compeitors = await _resultService.DisplaycompetitorData(user.Id);
            return Ok(Compeitors);
        }

        }
}
