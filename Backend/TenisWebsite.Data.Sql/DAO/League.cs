using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.Data.Sql.DAO
{
    public class League
    {
        public League()
        {
            CompetitorDatas = new List<CompetitorData>();
            LeagueTables = new List<LeagueTable>();
        }
        public int LeagueId { get; set; }
        public string Name { get; set; }
        public virtual ICollection<CompetitorData> CompetitorDatas { get; set; }
        public virtual ICollection<LeagueTable> LeagueTables { get; set; }
    }
}
