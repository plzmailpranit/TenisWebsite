using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TenisWebsite.Data.Sql.DAO;


namespace TenisWebsite.Data.Sql.DAOConfigurations
{
    class CompetitorDataConfiguration : IEntityTypeConfiguration<CompetitorData>
    {
        public void Configure(EntityTypeBuilder<CompetitorData> builder)
        {
            builder.Property(c => c.CompetitorDataId).IsRequired();
            builder.Property(c => c.FirstName).IsRequired();
            builder.Property(c => c.LastName).IsRequired();
            builder.Property(c => c.UserId).HasColumnType("varchar(767)");

            builder.HasOne(x => x.League)
               .WithMany(x => x.CompetitorDatas)
               .OnDelete(DeleteBehavior.Restrict)
               .HasForeignKey(x => x.LeagueId);
        }

    }
}
