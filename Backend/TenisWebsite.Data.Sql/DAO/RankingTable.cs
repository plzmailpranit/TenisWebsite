using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.Data.Sql.DAO
{
    public class RankingTable
    {
        public int RankingTableId { get; set; }
        public int MatechesWon { get; set; }
        public int MetchesLoss { get; set; }
        public int CompetitorDataId { get; set; }
        public int Position { get; set; }
        public virtual CompetitorData CompetitorData { get; set; }
    }
}
