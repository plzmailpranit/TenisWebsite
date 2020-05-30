using System;
using System.Collections.Generic;
using System.Text;
using TenisWebsite.Data.Sql.DAO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TenisWebsite.Data.Sql.DAOConfigurations
{
    class MatchConfiguration : IEntityTypeConfiguration<Match>
    {
        public void Configure(EntityTypeBuilder<Match> builder)
        {
            builder.Property(c => c.MatchId).IsRequired();
            builder.Property(c => c.Competitor1).IsRequired();
            builder.Property(c => c.Competitor2).IsRequired();
            builder.Property(c => c.Competitor1Set1).IsRequired();
            builder.Property(c => c.Competitor1Set2).IsRequired();
            builder.Property(c => c.Competitor2Set1).IsRequired();
            builder.Property(c => c.Competitor2Set2).IsRequired();
            
            builder.HasOne(x => x.CompetitorData1)
               .WithMany(x => x.MatchesPlayers1)
               .OnDelete(DeleteBehavior.Restrict)
               .HasForeignKey(x => x.Competitor1);
            builder.HasOne(x => x.CompetitorData2)
               .WithMany(x => x.MatchesPlayers2)
               .OnDelete(DeleteBehavior.Restrict)
               .HasForeignKey(x => x.Competitor2);
            builder.HasOne(x => x.CompetitorWinner)
               .WithMany(x => x.Winners)
               .OnDelete(DeleteBehavior.Restrict)
               .HasForeignKey(x => x.Winner);
        }
    }
}
