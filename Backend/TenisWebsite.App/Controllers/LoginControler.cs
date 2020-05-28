using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using TenisWebsite.Api.ViewModel;
using TenisWebsite.IServices.User;
using TenisWebsite.Api.Mapers;
using TenisWebsite.Api.Validation;
using Microsoft.EntityFrameworkCore;
using TenisWebsite.Api.BindingModels;
using TenisWebsite.Common;
using Microsoft.AspNetCore.Cors;

namespace TenisWebsite.Api.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/user")]
    [EnableCors()]
    public class LoginControler : Controller
    {
        private readonly UserManager<IdentityUser> _userManger;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IUserService _userService;

       
        public LoginControler(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, IUserService userService)
        {
            _userManger = userManager;
            _signInManager = signInManager;
            _userService = userService;
        }

        [ValidateModel]
        public async Task<IActionResult> Post([FromBody] IServices.Request.CreatUser createUser)
        {
            var user = await _userService.CreateUser(createUser);

            return Created(user.Id.ToString(),UserToUserViewModelsMapper.UserToUserViewModelMapper.UserToUserViewModel("ok"));
        }

        [Route("userExists/{userName}", Name = "UserExist")]
        [HttpGet]
        public async Task<IActionResult> UserExists(string userName)
        {
            var user =await _userManger.FindByNameAsync(userName);
            var userExist = new ExistViewModel
            {
                exist = user != null,
            };
            return Ok(userExist);
        }


        [Route("login", Name = "LoginUser")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody]IServices.Request.LoginUser loginUser)
        {
            var user = await _userManger.FindByNameAsync(loginUser.UserName);
            if(user== null) user = await _userManger.FindByEmailAsync(loginUser.UserName);
            if (user != null)
            {
                if (!user.EmailConfirmed)
                {
                    var userStatus2 = new UserViewModel
                    {
                        Status = "Error",
                        Errors = new string[1] { "Email not confirmed" },
                    };
                    return BadRequest(userStatus2);
                }


                var signInResult = await _signInManager.PasswordSignInAsync(user, loginUser.Password, false, false);

                if (signInResult.Succeeded)
                {
                    var userStatus1 = new UserViewModel
                    {
                        Status = "succes",
                    };
                    return Ok(userStatus1);
                }
                else
                {
                    var userStatus3 = new UserViewModel
                    {
                        Status = "Error",
                        Errors = new string[1] { "Password incorect" },
                    };
                    return BadRequest(userStatus3);
                }
            }
            var userStatus = new UserViewModel
            {
                Status = "Error",
                Errors = new string[1] { "user and email not exist" }
            };

            return BadRequest(userStatus);
        }

        [Route("Register", Name = "RegisterUser")]
        [ValidateModel]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] IServices.Request.CreatUser createUser)
        {

            var user = new IdentityUser
            {
                UserName =createUser.UserName,
                Email = createUser.Email,
            };
            var result = await _userManger.CreateAsync(user, createUser.Password);

            List<string> EroorList = new List<string>();
            foreach (var erorr in result.Errors)
            {
                EroorList.Add(erorr.Description);
            }
            var userStatus = new UserViewModel
            {
                Errors = EroorList.ToArray(),
            };
           
            if (result.Succeeded)
            {
                userStatus.Status = "Succes";
                string token=await _userManger.GenerateEmailConfirmationTokenAsync(user);
                SendRegistrationEmial.SendEmail(user.Email, token,user.UserName);   
                return Ok(userStatus);
            }
            else
            {
                userStatus.Status = "Error";
                return BadRequest(userStatus);
            }
        }

        [Route("ConfirmEmail", Name = "ConfirmEmail")]
        [ValidateModel]
        [HttpPost]
        public async Task<IActionResult> ConfirmEmail([FromBody] IServices.Request.ConfirmEmail confirmEmail)
        {
            var user = await _userManger.FindByNameAsync(confirmEmail.userName);
            var result = await _userManger.ConfirmEmailAsync(user, confirmEmail.token);
            List<string> EroorList = new List<string>();
            foreach (var erorr in result.Errors)
            {
                EroorList.Add(erorr.Description);
            }
            var userStatus = new UserViewModel
            {
                Errors = EroorList.ToArray(),
            };

            if (result.Succeeded)
            {
                userStatus.Status = "Succes";
                return Ok(userStatus);
            }
            else
            {
                userStatus.Status = "Error";
                return BadRequest(userStatus);
            }
        }
        [Route("AddNewAdmin", Name = "AddNewAdmin")]
        [ValidateModel]
        [HttpPost]
        [Authorize(Roles = "Admin, Administrator")]
        public async Task<IActionResult> AddNewAdmin([FromBody] IServices.Request.ConfirmEmail confirmEmail)
        {
            
            var user = await _userManger.FindByNameAsync(confirmEmail.userName);
            var result = await _userManger.ConfirmEmailAsync(user, confirmEmail.token);
            List<string> EroorList = new List<string>();
            foreach (var erorr in result.Errors)
            {
                EroorList.Add(erorr.Description);
            }
            var userStatus = new UserViewModel
            {
                Errors = EroorList.ToArray(),
            };

            if (result.Succeeded)
            {
                userStatus.Status = "Succes";
                return Ok(userStatus);
            }
            else
            {
                userStatus.Status = "Error";
                return BadRequest(userStatus);
            }
        }

    }
}
