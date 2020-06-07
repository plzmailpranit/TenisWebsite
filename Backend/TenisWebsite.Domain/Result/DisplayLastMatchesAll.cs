using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.Domain.Result
{
    public class DisplayLastMatchesAll
    {
        public string ownerFirstName  { get; set; }
        public string ownerLastName { get; set; }
        public string enemyFirstName { get; set; }
        public string enemyLasttName { get; set; }
        public string set1 { get; set; }
        public string set2 { get; set; }
        public string set3 { get; set; }
        public int league { get; set; }
    }
}
