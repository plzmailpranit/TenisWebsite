using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.IServices.Request
{
    public class AddCompetitor
    {
        public string confirmationCode { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public int legueId { get; set; }
        public bool Ranking { get; set; }
    }
}
