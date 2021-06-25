using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class RemovePostTypeEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_AnswerPostPostId",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_FeedbackPostPostId",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_FeedbackRequestPostPostId",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_InsightPostPostId",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_QuestionPostPostId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_AnswerPostPostId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_FeedbackPostPostId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_FeedbackRequestPostPostId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_InsightPostPostId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_QuestionPostPostId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "AnswerPostPostId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "FeedbackPostPostId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "FeedbackRequestPostPostId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "InsightPostPostId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "QuestionPostPostId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "AnnouncementPost_File",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "FeedbackPost_File",
                table: "Posts");

            migrationBuilder.AddColumn<string>(
                name: "PostType",
                table: "Posts",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_PostId",
                table: "Ratings",
                column: "PostId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_PostId",
                table: "Ratings",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_PostId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_PostId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "PostType",
                table: "Posts");

            migrationBuilder.AddColumn<int>(
                name: "AnswerPostPostId",
                table: "Ratings",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FeedbackPostPostId",
                table: "Ratings",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FeedbackRequestPostPostId",
                table: "Ratings",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "InsightPostPostId",
                table: "Ratings",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "QuestionPostPostId",
                table: "Ratings",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "AnnouncementPost_File",
                table: "Posts",
                type: "longblob",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Posts",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<byte[]>(
                name: "FeedbackPost_File",
                table: "Posts",
                type: "longblob",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_AnswerPostPostId",
                table: "Ratings",
                column: "AnswerPostPostId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_FeedbackPostPostId",
                table: "Ratings",
                column: "FeedbackPostPostId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_FeedbackRequestPostPostId",
                table: "Ratings",
                column: "FeedbackRequestPostPostId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_InsightPostPostId",
                table: "Ratings",
                column: "InsightPostPostId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_QuestionPostPostId",
                table: "Ratings",
                column: "QuestionPostPostId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_AnswerPostPostId",
                table: "Ratings",
                column: "AnswerPostPostId",
                principalTable: "Posts",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_FeedbackPostPostId",
                table: "Ratings",
                column: "FeedbackPostPostId",
                principalTable: "Posts",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_FeedbackRequestPostPostId",
                table: "Ratings",
                column: "FeedbackRequestPostPostId",
                principalTable: "Posts",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_InsightPostPostId",
                table: "Ratings",
                column: "InsightPostPostId",
                principalTable: "Posts",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_QuestionPostPostId",
                table: "Ratings",
                column: "QuestionPostPostId",
                principalTable: "Posts",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
