using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.Data.Sql.DAO
{
    public class Match
    {
        public int MatchId { get; set; }
        public int Competitor1 { get; set; }
        public int Competitor2 { get; set; }
        public int Competitor1Set1 { get; set; }
        public int Competitor1Set2 { get; set; }
        public int Competitor2Set1 { get; set; }
        public int Competitor2Set2 { get; set; }
        public int Competitor1Set3 { get; set; }
        public int Competitor2Set3 { get; set; }
        public bool Confirmation { get; set; }
        public DateTime AddingTime { get; set; }
        public bool Protest { get; set; }
        public int Winner { get; set; }

        public virtual CompetitorData CompetitorData1 { get; set; }
        public virtual CompetitorData CompetitorData2 { get; set; }
        public virtual CompetitorData CompetitorWinner { get; set; }

    }
}
