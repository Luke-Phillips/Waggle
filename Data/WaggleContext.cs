using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Waggle.Models;

namespace Waggle.Data
{
    public class WaggleContext : IdentityDbContext<ApplicationUser>
    {
        public WaggleContext (DbContextOptions<WaggleContext> options)
            : base(options)
        {
        }

        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<ApplicationUserClassroom> ApplicationUserClassrooms { get; set; }
        public DbSet<Classroom> Classrooms { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<InsightPost> InsightPosts { get; set; }
        public DbSet<QuestionPost> QuestionPosts { get; set; }
        public DbSet<AnswerPost> AnswerPosts { get; set; }
        public DbSet<FeedbackRequestPost> FeedbackRequestPosts { get; set; }
        public DbSet<FeedbackPost> FeedbackPosts { get; set; }
        public DbSet<AnnouncementPost> AnnouncementPosts { get; set; }
        public DbSet<CommentPost> CommentPosts { get; set; }
        public DbSet<Rating> Ratings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ApplicationUserClassroom>()
                .HasKey(ac => new { ac.ApplicationUserId, ac.ClassroomId });
        }
    }
}