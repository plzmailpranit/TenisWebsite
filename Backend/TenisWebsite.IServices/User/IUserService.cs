using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TenisWebsite.IServices.Request;

using System.Text;

namespace TenisWebsite.IServices.User
{
    public interface IUserService
    {
        Task<int> CreateUser(CreatUser createUser);
    }
}
