using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.IServices.Request
{
    public class CreatUser
    {
        public string UserName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }
        public string Code { get; set; }
    }
}
