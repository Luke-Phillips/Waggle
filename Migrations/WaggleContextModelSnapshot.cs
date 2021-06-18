﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Waggle.Data;

namespace Waggle.Migrations
{
    [DbContext(typeof(WaggleContext))]
    partial class WaggleContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.6");

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("ClaimType")
                        .HasColumnType("longtext");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("longtext");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("ClaimType")
                        .HasColumnType("longtext");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("longtext");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.Property<string>("ProviderKey")
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("longtext");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("RoleId")
                        .HasColumnType("varchar(255)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("LoginProvider")
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.Property<string>("Name")
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.Property<string>("Value")
                        .HasColumnType("longtext");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Waggle.Models.AppUserClassroom", b =>
                {
                    b.Property<string>("ApplicationUserId")
                        .HasColumnType("varchar(255)");

                    b.Property<int>("ClassroomId")
                        .HasColumnType("int");

                    b.Property<string>("DisplayName")
                        .HasColumnType("longtext");

                    b.Property<bool>("IsModerator")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool>("isEnrolled")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("ApplicationUserId", "ClassroomId");

                    b.HasIndex("ClassroomId");

                    b.ToTable("AppUserClassrooms");
                });

            modelBuilder.Entity("Waggle.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("varchar(255)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<int?>("AnswerPostPostID")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("longtext");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("tinyint(1)");

                    b.Property<int?>("InsightPostPostID")
                        .HasColumnType("int");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("tinyint(1)");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("longtext");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("longtext");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("tinyint(1)");

                    b.Property<int?>("QuestionPostPostID")
                        .HasColumnType("int");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("longtext");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("varchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("AnswerPostPostID");

                    b.HasIndex("InsightPostPostID");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.HasIndex("QuestionPostPostID");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Waggle.Models.Classroom", b =>
                {
                    b.Property<int>("ClassroomId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("InviteCode")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.HasKey("ClassroomId");

                    b.ToTable("Classrooms");
                });

            modelBuilder.Entity("Waggle.Models.Post", b =>
                {
                    b.Property<int>("PostID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("AuthorName")
                        .HasColumnType("longtext");

                    b.Property<int>("ClassroomId")
                        .HasColumnType("int");

                    b.Property<string>("Content")
                        .HasColumnType("longtext");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int?>("PostID1")
                        .HasColumnType("int");

                    b.Property<DateTime>("Time")
                        .HasColumnType("datetime(6)");

                    b.Property<bool>("isRepliable")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("PostID");

                    b.HasIndex("ClassroomId");

                    b.HasIndex("PostID1");

                    b.ToTable("Posts");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Post");
                });

            modelBuilder.Entity("Waggle.Models.RefreshToken", b =>
                {
                    b.Property<int>("RefreshTokenId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("AddedDate")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("ExpiryDate")
                        .HasColumnType("datetime(6)");

                    b.Property<bool>("IsRevoked")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool>("IsUsed")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("JwtId")
                        .HasColumnType("longtext");

                    b.Property<string>("Token")
                        .HasColumnType("longtext");

                    b.Property<string>("UserId")
                        .HasColumnType("varchar(255)");

                    b.HasKey("RefreshTokenId");

                    b.HasIndex("UserId");

                    b.ToTable("RefreshTokens");
                });

            modelBuilder.Entity("Waggle.Models.AnnouncementPost", b =>
                {
                    b.HasBaseType("Waggle.Models.Post");

                    b.Property<byte[]>("File")
                        .HasColumnType("longblob")
                        .HasColumnName("AnnouncementPost_File");

                    b.HasDiscriminator().HasValue("AnnouncementPost");
                });

            modelBuilder.Entity("Waggle.Models.AnswerPost", b =>
                {
                    b.HasBaseType("Waggle.Models.Post");

                    b.HasDiscriminator().HasValue("AnswerPost");
                });

            modelBuilder.Entity("Waggle.Models.CommentPost", b =>
                {
                    b.HasBaseType("Waggle.Models.Post");

                    b.HasDiscriminator().HasValue("CommentPost");
                });

            modelBuilder.Entity("Waggle.Models.FeedbackPost", b =>
                {
                    b.HasBaseType("Waggle.Models.Post");

                    b.Property<byte[]>("File")
                        .HasColumnType("longblob")
                        .HasColumnName("FeedbackPost_File");

                    b.HasDiscriminator().HasValue("FeedbackPost");
                });

            modelBuilder.Entity("Waggle.Models.FeedbackRequestPost", b =>
                {
                    b.HasBaseType("Waggle.Models.Post");

                    b.Property<byte[]>("File")
                        .HasColumnType("longblob");

                    b.HasDiscriminator().HasValue("FeedbackRequestPost");
                });

            modelBuilder.Entity("Waggle.Models.InsightPost", b =>
                {
                    b.HasBaseType("Waggle.Models.Post");

                    b.HasDiscriminator().HasValue("InsightPost");
                });

            modelBuilder.Entity("Waggle.Models.QuestionPost", b =>
                {
                    b.HasBaseType("Waggle.Models.Post");

                    b.HasDiscriminator().HasValue("QuestionPost");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Waggle.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Waggle.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Waggle.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Waggle.Models.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Waggle.Models.AppUserClassroom", b =>
                {
                    b.HasOne("Waggle.Models.ApplicationUser", "ApplicationUser")
                        .WithMany("AppUserClassrooms")
                        .HasForeignKey("ApplicationUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Waggle.Models.Classroom", "Classroom")
                        .WithMany("AppUserClassroom")
                        .HasForeignKey("ClassroomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ApplicationUser");

                    b.Navigation("Classroom");
                });

            modelBuilder.Entity("Waggle.Models.ApplicationUser", b =>
                {
                    b.HasOne("Waggle.Models.AnswerPost", null)
                        .WithMany("ButtonPressers")
                        .HasForeignKey("AnswerPostPostID");

                    b.HasOne("Waggle.Models.InsightPost", null)
                        .WithMany("ButtonPressers")
                        .HasForeignKey("InsightPostPostID");

                    b.HasOne("Waggle.Models.QuestionPost", null)
                        .WithMany("ButtonPressers")
                        .HasForeignKey("QuestionPostPostID");
                });

            modelBuilder.Entity("Waggle.Models.Post", b =>
                {
                    b.HasOne("Waggle.Models.Classroom", null)
                        .WithMany("Posts")
                        .HasForeignKey("ClassroomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Waggle.Models.Post", null)
                        .WithMany("ReplyPosts")
                        .HasForeignKey("PostID1");
                });

            modelBuilder.Entity("Waggle.Models.RefreshToken", b =>
                {
                    b.HasOne("Waggle.Models.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Waggle.Models.ApplicationUser", b =>
                {
                    b.Navigation("AppUserClassrooms");
                });

            modelBuilder.Entity("Waggle.Models.Classroom", b =>
                {
                    b.Navigation("AppUserClassroom");

                    b.Navigation("Posts");
                });

            modelBuilder.Entity("Waggle.Models.Post", b =>
                {
                    b.Navigation("ReplyPosts");
                });

            modelBuilder.Entity("Waggle.Models.AnswerPost", b =>
                {
                    b.Navigation("ButtonPressers");
                });

            modelBuilder.Entity("Waggle.Models.InsightPost", b =>
                {
                    b.Navigation("ButtonPressers");
                });

            modelBuilder.Entity("Waggle.Models.QuestionPost", b =>
                {
                    b.Navigation("ButtonPressers");
                });
#pragma warning restore 612, 618
        }
    }
}
