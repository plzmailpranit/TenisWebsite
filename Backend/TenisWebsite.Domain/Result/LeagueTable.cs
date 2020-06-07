using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.Domain.Result
{
    public class LeagueTable
    {
        public string FirstName { get; set; }
        public string LasttName { get; set; }
        public int Points { get; set; }
        public int Position { get; set; }
        public int MatchesWin { get; set; }
        public int MatchesLoss { get; set; }
        public int SetsWin { get; set; }
        public int SetsLoss { get; set; }

    }
}
