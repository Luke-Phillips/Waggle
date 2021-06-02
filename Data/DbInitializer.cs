using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Waggle.Models;

namespace Waggle.Data
{
    public static class DbInitializer
    {

        public static void Initialize(WaggleContext context, UserManager<ApplicationUser> userManager)
        {
            UserManager<ApplicationUser> _userManager = userManager;

            // Look for any existing users in the database
            if (_userManager.Users.Any())
            {
                Console.WriteLine("DB has been seeded--------------------------------------");
                return; // DB has been seeded
            }

            Console.WriteLine("DB has NOT been seeded, seeding now-------------------------");

            var achA = new Achievement { Name = "AchievementA", Description = "Dummy Achievement A", Points = 10 };
            var achB = new Achievement { Name = "AchievementB", Description = "Dummy Achievement B", Points = 20 };
            var achC = new Achievement { Name = "AchievementB", Description = "Dummy Achievement C", Points = 30 };
           
            var users = new ApplicationUser[]
            {
                new ApplicationUser{Id="0001", Email="tuftr@byui.edu", NormalizedEmail="TUFTR@BYUI.EDU", UserName="Rob Tuft",
                    PasswordHash="#pwRT", Points=0, Achievements= new List<Achievement>() },
                new ApplicationUser{Id="0002", Email="msta@byui.edu", NormalizedEmail="MSTA@BYUI.EDU", UserName="Ms. TA",
                    PasswordHash="#pwTA", Points=30, Achievements= new List<Achievement> { achA } },
                new ApplicationUser{Id="0003", Email="howardde@byui.edu", NormalizedEmail="HOWARDDE@BYUI.EDU",
                    UserName="Derek Howard", PasswordHash="#pwDH", Points=0, Achievements= new List<Achievement>() },
                new ApplicationUser{Id="0004", Email="gar17040@byui.edu", NormalizedEmail="GAR17040@BYUI.EDU",
                    UserName="Michael Gardner", PasswordHash="#pwCG", Points=43, Achievements= new List<Achievement> { achA, achB, achC } },
                new ApplicationUser{Id="0005", Email="gar07024@byui.edu", NormalizedEmail="GAR07024@BYUI.EDU",
                    UserName="Michael Garrard", PasswordHash="#pwMG", Points=10, Achievements= new List<Achievement> { achA, achB } },
                new ApplicationUser{Id="0006", Email="phi13014@byui.edu", NormalizedEmail="PHI13014@BYUI.EDU",
                    UserName="Luke Phillips", PasswordHash="#pwLP", Points=42, Achievements= new List<Achievement> { achA } },
            };

            foreach (ApplicationUser u in users)
            {
                context.Users.Add(u);
            }
            context.SaveChanges();        

            var classrooms = new Classroom[]
            {
                new Classroom{Name="Senior Project A", InviteCode="ABCD1234",},
                new Classroom{Name="Senior Project B", InviteCode="ZYXW9876",},
            };

            foreach (Classroom c in classrooms)
            {
                context.Classrooms.Add(c);
            }
            context.SaveChanges();

            var appUserClassrooms = new AppUserClassroom[]
            {
                new AppUserClassroom{ApplicationUserId="0001", ClassroomId=1, Role="Moderator", DisplayName="Brother Tuft"},
                new AppUserClassroom{ApplicationUserId="0002", ClassroomId=1, Role="Moderator", DisplayName="TA"},
                new AppUserClassroom{ApplicationUserId="0003", ClassroomId=2, Role="Moderator", DisplayName="Brother Howard"},
                new AppUserClassroom{ApplicationUserId="0004", ClassroomId=1, Role="Student", DisplayName="Cade Gardner"},
                new AppUserClassroom{ApplicationUserId="0005", ClassroomId=2, Role="Student", DisplayName="Fig"},
                new AppUserClassroom{ApplicationUserId="0006", ClassroomId=1, Role="Student", DisplayName="Luke"},
                new AppUserClassroom{ApplicationUserId="0006", ClassroomId=2, Role="Student", DisplayName="Lukas"},
            };

            foreach (AppUserClassroom ac in appUserClassrooms)
            {
                context.AppUserClassrooms.Add(ac);
            }
            context.SaveChanges();

            Console.WriteLine("DB has now been seeded -------------------------------------");
        }
    }
}
