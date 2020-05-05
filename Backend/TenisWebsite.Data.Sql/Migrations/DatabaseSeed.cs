using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace TenisWebsite.Data.Sql.Migrations
{
   
    public class DatabaseSeed
    {
        private readonly TenisWebsiteDbContext _context;
        private readonly UserManager<IdentityUser> _userManger;

        public DatabaseSeed(TenisWebsiteDbContext context, UserManager<IdentityUser> userManger)
        {
            _context = context;
            _userManger = userManger;
        }
        public void Seed()
        {
            var user = new IdentityUser
            {
                UserName = "Admin",
                Email = "abcd1@gmail.com",
                EmailConfirmed = true,
            };
            _userManger.CreateAsync(user, "Admin1234,");
        }
    }
}
