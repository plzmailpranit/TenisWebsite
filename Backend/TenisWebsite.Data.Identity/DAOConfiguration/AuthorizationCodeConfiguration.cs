using System;
using System.Collections.Generic;
using System.Text;
using TenisWebsite.Data.Identity.DAO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TenisWebsite.Data.Identity.DAOConfigurations
{
    class AuthorizationCodeConfiguration : IEntityTypeConfiguration<AuthorizationCode>
    {
        public void Configure(EntityTypeBuilder<AuthorizationCode> builder)
        {
            builder.Property(c => c.UserId).IsRequired();
            builder.Property(c => c.Key).IsRequired();
            builder.Property(c => c.UserId).HasColumnType("varchar(767)");
            builder.Property(c => c.Key).HasColumnType("varchar(127)");
        }

    }
}

