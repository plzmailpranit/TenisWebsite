using System;
using System.Collections.Generic;
using System.Text;
using TenisWebsite.Data.Sql.DAO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TenisWebsite.Data.Sql.DAOConfigurations
{
    class RankingTableConfiguration : IEntityTypeConfiguration<RankingTable>
    {
        public void Configure(EntityTypeBuilder<RankingTable> builder)
        {
            builder.Property(c => c.RankingTableId).IsRequired();
            builder.Property(c => c.MatechesWon).IsRequired();
            builder.Property(c => c.MetchesLoss).IsRequired();
            builder.Property(c => c.CompetitorDataId).IsRequired();

            builder.HasOne(x => x.CompetitorData)
               .WithMany(x => x.RankingTables)
               .OnDelete(DeleteBehavior.Restrict)
               .HasForeignKey(x => x.CompetitorDataId);
        }
    }
}
