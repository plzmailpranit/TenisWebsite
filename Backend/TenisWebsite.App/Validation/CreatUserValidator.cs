using System;
using FluentValidation;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TenisWebsite.IServices.Request;

namespace TenisWebsite.Api.Validation
{
    public class CreateUserValidator : AbstractValidator<CreatUser>
    {
        public CreateUserValidator()
        {
            RuleFor(x => x.UserName).NotNull();
            RuleFor(x => x.Password).NotNull();
            RuleFor(x => x.Email).NotNull().EmailAddress();
        }
    }
}
