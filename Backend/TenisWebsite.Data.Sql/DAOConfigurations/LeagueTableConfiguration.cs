using System;
using System.Collections.Generic;
using System.Text;
using TenisWebsite.Data.Sql.DAO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TenisWebsite.Data.Sql.DAOConfigurations
{
    class LeagueTableConfiguration: IEntityTypeConfiguration<LeagueTable>
    {
       public void Configure(EntityTypeBuilder<LeagueTable> builder)
        {
            builder.Property(c => c.LeagueTableId).IsRequired();
            builder.Property(c => c.MatechesWon).IsRequired();
            builder.Property(c => c.MatchesLoss).IsRequired();
            builder.Property(c => c.SetsLoss).IsRequired();
            builder.Property(c => c.SetsWon).IsRequired();
            builder.Property(c => c.CompetitorDataId).IsRequired();
            builder.Property(c => c.LeagueId).IsRequired();


            builder.HasOne(x => x.League)
               .WithMany(x => x.LeagueTables)
               .OnDelete(DeleteBehavior.Restrict)
               .HasForeignKey(x => x.LeagueId);
            builder.HasOne(x => x.CompetitorData)
               .WithMany(x => x.LeagueTables)
               .OnDelete(DeleteBehavior.Restrict)
               .HasForeignKey(x => x.CompetitorDataId);
        }
    }
}
