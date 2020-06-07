using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.Domain.Result
{
    public class RankingTable
    {
        public string FirstName { get; set; }
        public string LasttName { get; set; }
        public int Position { get; set; }
        public int MatchesWin { get; set; }
        public int MatchesLoss { get; set; }


    }
}
