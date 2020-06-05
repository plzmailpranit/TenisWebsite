using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.Domain.Result
{
    public class CompetitorPosition
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string LeaugeName { get; set; }
        public int RankingPosition { get; set;}
        public int LeguePosition { get; set; }

    }
}
