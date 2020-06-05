using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.Data.Sql.DAO
{
    public class LeagueTable
    {
        public int LeagueTableId { get; set; }
        public int MatechesWon { get; set; }
        public int MatchesLoss { get; set; }
        public int SetsWon { get; set; }
        public int SetsLoss { get; set; }
        public int CompetitorDataId { get; set; }
        public int Points { get; set; }
        public int Position { get; set; }
        public int LeagueId { get; set; }
        public virtual League League { get; set; }
        public virtual CompetitorData CompetitorData { get; set; }

    }
}
