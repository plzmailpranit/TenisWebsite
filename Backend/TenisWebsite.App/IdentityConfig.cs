using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace TenisWebsite.Api
{
    public class IdentityConfig
    {
        public readonly IOptions<IdentityOptions> options;
        public IdentityConfig()
        {
            options.Value.SignIn.RequireConfirmedEmail = true;
            options.Value.User.RequireUniqueEmail = true;
            options.Value.Password.RequireDigit = true;
            options.Value.Password.RequiredLength = 8;
            options.Value.Password.RequiredUniqueChars = 2;
            options.Value.Password.RequireLowercase = true;
            options.Value.Password.RequireUppercase = true;
            options.Value.Password.RequireNonAlphanumeric = true;
            options.Value. User.AllowedUserNameCharacters = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźżAĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ1234567890-_$.";
        }
        
    }
}
