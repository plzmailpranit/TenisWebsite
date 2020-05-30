using System;
using System.Collections.Generic;
using System.Text;

namespace TenisWebsite.Domain.Code
{
    public class Code
    {
        public int Id { get; set; }
        public string ConfirmationCode { get; private set; }
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public int LegueId { get; private set; }
        public bool Competition { get; private set; }
        public Code (string confirmationCode, string firstName, string lastName, int legueId, bool competition)
        {
            ConfirmationCode = confirmationCode;
            FirstName = firstName;
            LastName = lastName;
            LegueId = legueId;
            Competition = competition;
        }
    }
}
