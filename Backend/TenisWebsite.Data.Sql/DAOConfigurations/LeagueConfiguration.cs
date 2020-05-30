using System;
using System.Collections.Generic;
using System.Text;
using TenisWebsite.Data.Sql.DAO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TenisWebsite.Data.Sql.DAOConfigurations
{
    class LeagueConfiguration: IEntityTypeConfiguration<League>
    {
        public void Configure(EntityTypeBuilder<League> builder)
        {
            builder.Property(c => c.LeagueId).IsRequired();
            builder.Property(c => c.Name).IsRequired();
        }

    }
}
