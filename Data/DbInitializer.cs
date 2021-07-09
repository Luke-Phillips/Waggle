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
           
            /*var ratings = new Ratings[]
            {

            }*/

            var users = new ApplicationUser[]
            {
                new ApplicationUser{Id="0001", Email="tuftr@byui.edu", NormalizedEmail="TUFTR@BYUI.EDU",
                    UserName="Rob Tuft", PasswordHash="#pwRT"},
                new ApplicationUser{Id="0002", Email="msta@byui.edu", NormalizedEmail="MSTA@BYUI.EDU",
                    UserName="Ms. TA", PasswordHash="#pwTA" },
                new ApplicationUser{Id="0003", Email="howardde@byui.edu", NormalizedEmail="HOWARDDE@BYUI.EDU",
                    UserName="Derek Howard", PasswordHash="#pwDH"},
                new ApplicationUser{Id="0004", Email="gar17040@byui.edu", NormalizedEmail="GAR17040@BYUI.EDU",
                    UserName="Michael Gardner", PasswordHash="#pwCG" },
                new ApplicationUser{Id="0005", Email="gar07024@byui.edu", NormalizedEmail="GAR07024@BYUI.EDU",
                    UserName="Michael Garrard", PasswordHash="#pwMG" },
                new ApplicationUser{Id="0006", Email="phi13014@byui.edu", NormalizedEmail="PHI13014@BYUI.EDU",
                    UserName="Luke Phillips", PasswordHash="#pwLP"},
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

            var applicationUserClassrooms = new ApplicationUserClassroom[]
            {
                new ApplicationUserClassroom{ApplicationUserId="0001", ClassroomId=1, IsModerator=true, EnrollmentStatus=EnrollmentStatus.Enrolled, DisplayName="Brother Tuft"},
                new ApplicationUserClassroom{ApplicationUserId="0002", ClassroomId=1, IsModerator=true, EnrollmentStatus=EnrollmentStatus.Enrolled, DisplayName="TA"},
                new ApplicationUserClassroom{ApplicationUserId="0003", ClassroomId=2, IsModerator=true, EnrollmentStatus=EnrollmentStatus.Enrolled, DisplayName="Brother Howard"},
                new ApplicationUserClassroom{ApplicationUserId="0004", ClassroomId=1, IsModerator=false, EnrollmentStatus=EnrollmentStatus.Enrolled, DisplayName="Cade Gardner"},
                new ApplicationUserClassroom{ApplicationUserId="0005", ClassroomId=2, IsModerator=false, EnrollmentStatus=EnrollmentStatus.Enrolled, DisplayName="Fig"},
                new ApplicationUserClassroom{ApplicationUserId="0006", ClassroomId=1, IsModerator=false, EnrollmentStatus=EnrollmentStatus.Enrolled, DisplayName="Luke"},
                new ApplicationUserClassroom{ApplicationUserId="0006", ClassroomId=2, IsModerator=false, EnrollmentStatus=EnrollmentStatus.Pending, DisplayName="Lukas"},
            };         

            foreach (ApplicationUserClassroom ac in applicationUserClassrooms)
            {
                context.ApplicationUserClassrooms.Add(ac);
            }
            context.SaveChanges();

            var insight = new Post
            {
                ClassroomId = 2,
                Time = DateTime.Parse("6/17/2021 8:44:45 PM"),
                Content = "I'm sharing an Insight, learn mine knowledge!",
                PostType = "insight",
                IsRepliable = true,
                ReplyPosts = null
            };
            var answer = new Post
            {
                ClassroomId = 2,
                Time = DateTime.Parse("6/17/2021 8:59:26 PM"),
                Content = "I don't know, but this is an answer post.",
                PostType = "answer",
                IsRepliable = false,
                ReplyPosts = null
            };
            var question = new Post
            {
                ClassroomId = 2,
                Time = DateTime.Parse("6/17/2021 8:47:18 PM"),
                Content = "What is a question post?",
                PostType = "question",
                IsRepliable = false,
                ReplyPosts = new Post[] { answer }
            };

            foreach (Post p in new Post[] { insight, question, answer })
            {
                context.Posts.Add(p);
            }
            context.SaveChanges();

            Console.WriteLine("DB has now been seeded -------------------------------------");
        }
    }
}
