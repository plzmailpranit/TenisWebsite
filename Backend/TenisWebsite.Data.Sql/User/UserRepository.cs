using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TenisWebsite.IData.User;
using TenisWebsite.Data.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace TenisWebsite.Data.Sql.User
{
    public class UserRepository: IUserRepository
    {
        private readonly IdentityDbContext _identityDbContext;
        private readonly TenisWebsiteDbContext _context;
        private readonly UserManager<IdentityUser> _userManger;

        public UserRepository(TenisWebsiteDbContext context, IdentityDbContext identityDbContext, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _identityDbContext = identityDbContext;
            _userManger = userManager;
        }

        public async Task<int> AddUser(Domain.User.User user)
        {
            var code =await _identityDbContext.AuthorizationCode.Where(x => x.Key == user.Code).FirstOrDefaultAsync();
            if (code == null) return -1;
            else if (code.UserId != null) return -2;
            var user1 = await _userManger.FindByNameAsync(user.UserName);
            if (user1 != null)
            {
                code.UserId = user1.Id.ToString();
                await _identityDbContext.SaveChangesAsync();
            }
            else return -3;
            var Competitor =await _context.CompetitorData.Where(x => x.CompetitorDataId == code.CompetitorId).FirstOrDefaultAsync();
            if (Competitor != null)
            {
                Competitor.UserId = user1.Id.ToString();
                await _context.SaveChangesAsync();
            }
            else return -3;
            return 0;
        }
    }
}
