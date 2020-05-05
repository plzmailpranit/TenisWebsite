using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.IServices.Request
{
    public class ConfirmEmail
    {
        public string token { get; set; }
        public string userName { get; set; }
        
    }
}
