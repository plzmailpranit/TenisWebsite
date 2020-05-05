using System;
using System.Collections.Generic;
using System.Text;
using TenisWebsite.IServices.Request;
using System.Threading.Tasks;
using TenisWebsite.IServices.User;
using TenisWebsite.Domain.User;
using TenisWebsite.IData.User;

namespace TenisWebsite.Services.User
{
    public class UserService: IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<Domain.User.User> CreateUser(CreatUser createUser)
        {
            var user = new Domain.User.User(createUser.UserName, createUser.Email, createUser.Password);
            user.Id = await _userRepository.AddUser(user);
            return user;
        }
    }
}
