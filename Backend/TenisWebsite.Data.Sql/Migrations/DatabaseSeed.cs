using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
using TenisWebsite.Data.Sql.DAO;

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
        public async void Seed()
        {
            League league1 = new League
            {
                LeagueId = 1,
                Name = "Pierwsza Liga"
            };
            League league2 = new League
            {
                LeagueId = 2,
                Name = "Druga Liga"
            };
            League league3 = new League
            {
                LeagueId = 3,
                Name = "Trzecia Liga"
            };
            League league4 = new League
            {
                LeagueId = 4,
                Name = "Czwarta Liga"
            };
            await _context.AddAsync(league1);
            await _context.AddAsync(league2);
            await _context.AddAsync(league3);
            await _context.AddAsync(league4);
            await _context.SaveChangesAsync();

        }
    }
}
