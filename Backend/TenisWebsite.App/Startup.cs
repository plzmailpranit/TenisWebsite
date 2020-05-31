using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TenisWebsite.Data.Sql;
//using TenisWebsite.Data.Sql.DAO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Infrastructure;
using TenisWebsite.Api.Validation;
using TenisWebsite.IServices.User;
using TenisWebsite.Services.User;
using TenisWebsite.IData.User;
using TenisWebsite.IServices.Code;
using TenisWebsite.Services.Code;
using TenisWebsite.Services.Code;
using TenisWebsite.IData.Code;
using TenisWebsite.Data.Sql.Code;
using TenisWebsite.Data.Sql.Migrations;
using TenisWebsite.Data.Sql.User;
using TenisWebsite.Api.Middlewares;
using TenisWebsite.Api.Controllers;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Authentication.Certificate;
using Microsoft.AspNetCore.Cors;
using TenisWebsite.Data.Identity;
using TenisWebsite.Data.Identity.Migrations;
using Org.BouncyCastle.Crypto.Tls;

namespace TenisWebsite.Api
{
    public class Startup
    {
        
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
           services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:3000", "null", "http://teniswebsite.example.com:3000");
                                      builder.AllowAnyMethod();
                                      builder.AllowAnyHeader();
                                      builder.AllowCredentials();
                                      
                                  });
            });
            services.AddAuthentication(
                    CertificateAuthenticationDefaults.AuthenticationScheme)
                     .AddCertificate();
            services.AddHealthChecks();

            services.AddDbContext<IdentityDbContext>(options => options.UseMySQL(Configuration.GetConnectionString("IdentityDbContext")));
            services.AddDbContext<TenisWebsiteDbContext>(options => options.UseMySQL(Configuration.GetConnectionString("TenisWebsiteDbContext")));
            services.AddIdentity<IdentityUser, IdentityRole>(options=> 
            {
                options.SignIn.RequireConfirmedEmail = true;
                options.User.RequireUniqueEmail = true;
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequiredUniqueChars = 2;
                options.Password.RequireLowercase = true;
                options.Password.RequireUppercase = true;
                options.Password.RequireNonAlphanumeric = true;
                options.User.AllowedUserNameCharacters = "aπbcÊdeÍfghijkl≥mnÒoÛpqrsútuvwxyzüøA•BC∆DE FGHIJKL£MN—O”PRSåTUWYZèØ1234567890-_$.";
            }) 
           .AddEntityFrameworkStores<IdentityDbContext>().AddDefaultTokenProviders();
            services.AddTransient<Data.Identity.Migrations.DatabaseSeed>();
            services.AddTransient<Data.Sql.Migrations.DatabaseSeed>();

            services.AddRouting();
            services.AddScoped<IValidator<IServices.Request.CreatUser>, CreateUserValidator>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUserRepository,UserRepository>();
            services.AddScoped<ICodeService, CodeService>();
            services.AddScoped<ICodeRepository, CodeRepository>();
            services.AddControllers();            
            services.AddApiVersioning(o =>
            {
                o.ReportApiVersions = true;
                o.UseApiBehavior = false;
            });
        }


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
           
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<IdentityDbContext>();
                var databaseSeed = serviceScope.ServiceProvider.GetRequiredService<Data.Identity.Migrations.DatabaseSeed>();
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                databaseSeed.Seed();
            }
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<TenisWebsiteDbContext>();
                var databaseSeed = serviceScope.ServiceProvider.GetRequiredService<Data.Sql.Migrations.DatabaseSeed>();
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                databaseSeed.Seed();
            }
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
           

            app.UseStaticFiles();
           
            app.UseRouting();
            app.UseCors();
            app.UseAuthentication();
            app.UseAuthorization();

            


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapDefaultControllerRoute();

            });
            app.UseApiVersioning();
            app.UseMiddleware<ErrorHandlerMiddleware>();
        }

    }
}
