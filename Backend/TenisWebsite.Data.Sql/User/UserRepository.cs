using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TenisWebsite.IData.User;

namespace TenisWebsite.Data.Sql.User
{
    public class UserRepository: IUserRepository
    {
        private readonly TenisWebsiteDbContext _context;

        public UserRepository(TenisWebsiteDbContext context)
        {
            _context = context;
        }

        public async Task<int> AddUser(Domain.User.User uzytkownik)
        {
         
            return 0;
        }
    }
}
