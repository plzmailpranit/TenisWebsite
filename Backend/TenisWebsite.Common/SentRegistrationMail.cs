using System;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System.Net;
using System.Net.Mail;

namespace TenisWebsite.Common
{
    public class SendRegistrationEmial
    {
        public async static void SendEmail(string mail,string token,string username)
        {
            MailAddress to = new MailAddress(mail);
            MailAddress addressFrom = new MailAddress("teniswebsiteauthentication@gmail.com", "TenisWebsite Confirm Email");
            MailMessage message = new MailMessage(addressFrom, to);
            message.Subject = "Using the new SMTP client.";
            message.Body = "Please confirm your account by clicking this link: <a href= \"http://localhost:3000/Confirm?Token='" + token +"'&userName='"+username+ "'\">link</a>";
            message.IsBodyHtml = true;

            SmtpClient client = new SmtpClient();
            
            client.Host = "smtp.gmail.com";
            client.Port = 587;
            client.UseDefaultCredentials = true;
            client.Credentials = new NetworkCredential("teniswebsiteauthentication@gmail.com", "Czarek1234");
            client.EnableSsl = true;

            try
            {
                await client.SendMailAsync(message);
            }

            catch 
            {
               
            }

        }
    }
}
