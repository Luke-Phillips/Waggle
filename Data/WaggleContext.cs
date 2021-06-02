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
        public DbSet<Achievement> Achievements { get; set; }
        public DbSet<Classroom> Classrooms { get; set; }
        public DbSet<AppUserClassroom> AppUserClassrooms { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<AppUserClassroom>()
                .HasKey(ac => new { ac.ApplicationUserId, ac.ClassroomId });
        }
    }
}