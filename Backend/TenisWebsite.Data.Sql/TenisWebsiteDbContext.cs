using System;
using System.Collections.Generic;
using System.Text;
//using TenisWebsite.Data.Sql.DAO;
//using TenisWebsite.Data.Sql.DAOConfigurations;
using System.Data.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.AspNetCore.Identity;
using TenisWebsite.Data.Sql.DAO;
using TenisWebsite.Data.Sql.DAOConfigurations;

namespace TenisWebsite.Data.Sql
{
    public class TenisWebsiteDbContext : DbContext
    {
        public TenisWebsiteDbContext(DbContextOptions<TenisWebsiteDbContext> options) : base(options) { }

        public virtual DbSet<CompetitorData> CompetitorData { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new CompetitorDataConfiguration());
        }

    }

}
