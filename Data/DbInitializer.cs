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
            // Look for any existing users in the database
            if (context.Wagglers.Any())
            {
                Console.WriteLine("DB has been seeded--------------------------------------");
                return; // DB has been seeded
            }

            Console.WriteLine("DB has NOT been seeded, seeding now-------------------------");

            var achA = new Achievement { Name = "AchievementA", Description = "Dummy Achievement A", Points = 10 };
            var achB = new Achievement { Name = "AchievementB", Description = "Dummy Achievement B", Points = 20 };
            var achC = new Achievement { Name = "AchievementB", Description = "Dummy Achievement C", Points = 30 };
           
            var users = new Waggler[]
            {
                new Waggler{Email="tuftr@byui.edu", Name="Rob Tuft", Password="#pwRT", Points=0,
                    Achievements= new List<Achievement>() },
                new Waggler{Email="msta@byui.edu", Name="Ms. TA", Password="#pwTA", Points=30,
                    Achievements= new List<Achievement> { achA } },
                new Waggler{Email="howardde@byui.edu", Name="Derek Howard", Password="#pwDH", Points=0,
                    Achievements= new List<Achievement>() },
                new Waggler{Email="gar17040@byui.edu", Name="Michael Gardner", Password="#pwCG", Points=43, // wth Cade
                    Achievements= new List<Achievement> { achA, achB, achC } },
                new Waggler{Email="gar07024@byui.edu", Name="Michael Garrard", Password="#pwMG", Points=42,
                    Achievements= new List<Achievement> { achA, achB } },
                new Waggler{Email="phi13014@byui.edu", Name="Luke Phillips", Password="#pwLP", Points=10,
                    Achievements= new List<Achievement> { achA } },
            };

            foreach (Waggler u in users)
            {
                context.Wagglers.Add(u);
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

            var classroomWagglers = new ClassroomWaggler[]
            {
                new ClassroomWaggler{WagglerID=1, ClassroomID=1, Role="Moderator", DisplayName="Brother Tuft"},
                new ClassroomWaggler{WagglerID=2, ClassroomID=1, Role="Moderator", DisplayName="TA"},
                new ClassroomWaggler{WagglerID=3, ClassroomID=2, Role="Moderator", DisplayName="Brother Howard"},
                new ClassroomWaggler{WagglerID=4, ClassroomID=1, Role="Student", DisplayName="Cade Gardner"},
                new ClassroomWaggler{WagglerID=5, ClassroomID=2, Role="Student", DisplayName="Fig"},
                new ClassroomWaggler{WagglerID=6, ClassroomID=1, Role="Student", DisplayName="Luke"},
                new ClassroomWaggler{WagglerID=6, ClassroomID=2, Role="Student", DisplayName="Lukas"},
            };

            foreach (ClassroomWaggler cu in classroomWagglers)
            {
                context.ClassroomWagglers.Add(cu);
            }
            context.SaveChanges();
        }
    }
}
