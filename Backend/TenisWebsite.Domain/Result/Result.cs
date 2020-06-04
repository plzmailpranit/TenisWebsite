using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.Domain.Result
{
    public class Result
    {
        public int Id { get; set; }
        public int Enemy { get; private set; }
        public string Set1 { get; private set; }
        public string Set2 { get; private set; }
        public string Set3 { get; private set; }
        public int League { get; private set; }
        public Result(int enemy,string set1,string set2,string set3,int league)
        {
            Enemy = enemy;
            Set1 = set1;
            Set2 = set2;
            Set3 = set3;
            League = league;
        }
    }
}
