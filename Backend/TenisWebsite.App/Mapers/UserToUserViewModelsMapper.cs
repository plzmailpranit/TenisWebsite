using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TenisWebsite.Api.ViewModel;

namespace TenisWebsite.Api.Mapers
{

        public class UserToUserViewModelMapper
        {
            public static UserViewModel UserToUserViewModel(string status)
            {
                var userViewModel = new UserViewModel
                {
                    Status = status,                    
                };
                return userViewModel;
            }
        }
}
