using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Waggle.Models;

namespace Waggle.Data
{
    public static class DbInitializer
    {
        public static void Initialize(WaggleContext context)
        {
            //context.Database.EnsureCreated();

            // Look for any existing users in the database
            if (context.Users.Any())
            {
                return; // DB has been seeded
            }

            var users = new User[]
            {
                new User{Email="tuftr@byui.edu", Name="Rob Tuft", Password="#pwRT"},
                new User{Email="msta@byui.edu", Name="Ms. TA", Password="#pwTA"},
                new User{Email="howardde@byui.edu", Name="Derek Howard", Password="#pwDH" },
                new User{Email="gar17040@byui.edu", Name="Michael Gardner", Password="#pwCG" },
                new User{Email="gar07024@byui.edu", Name="Michael Garrard", Password="#pwMG" },
                new User{Email="phi13014@byui.edu", Name="Luke Phillips", Password="#pwLP" },
            };

            foreach (User u in users)
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

            var classroomUsers = new ClassroomUser[]
            {
                new ClassroomUser{UserID=1, ClassroomID=1, Role="Moderator", DisplayName="Brother Tuft"},
                new ClassroomUser{UserID=2, ClassroomID=1, Role="Moderator", DisplayName="TA"},
                new ClassroomUser{UserID=3, ClassroomID=2, Role="Moderator", DisplayName="Brother Howard"},
                new ClassroomUser{UserID=4, ClassroomID=1, Role="Student", DisplayName="Cade Gardner"},
                new ClassroomUser{UserID=5, ClassroomID=2, Role="Student", DisplayName="Fig"},
                new ClassroomUser{UserID=6, ClassroomID=1, Role="Student", DisplayName="Luke"},
                new ClassroomUser{UserID=6, ClassroomID=2, Role="Student", DisplayName="Lukas"},
            };

            foreach (ClassroomUser cu in classroomUsers)
            {
                context.ClassroomUsers.Add(cu);
            }
            context.SaveChanges();
        }
    }
}
