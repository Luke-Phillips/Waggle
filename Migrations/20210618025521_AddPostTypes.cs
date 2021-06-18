using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class AddPostTypes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Classrooms_ClassroomId",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Posts");

            migrationBuilder.AlterColumn<int>(
                name: "ClassroomId",
                table: "Posts",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

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

            migrationBuilder.AddColumn<byte[]>(
                name: "File",
                table: "Posts",
                type: "longblob",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "isRepliable",
                table: "Posts",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "AnswerPostPostID",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "InsightPostPostID",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "QuestionPostPostID",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_AnswerPostPostID",
                table: "AspNetUsers",
                column: "AnswerPostPostID");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_InsightPostPostID",
                table: "AspNetUsers",
                column: "InsightPostPostID");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_QuestionPostPostID",
                table: "AspNetUsers",
                column: "QuestionPostPostID");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Posts_AnswerPostPostID",
                table: "AspNetUsers",
                column: "AnswerPostPostID",
                principalTable: "Posts",
                principalColumn: "PostID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Posts_InsightPostPostID",
                table: "AspNetUsers",
                column: "InsightPostPostID",
                principalTable: "Posts",
                principalColumn: "PostID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Posts_QuestionPostPostID",
                table: "AspNetUsers",
                column: "QuestionPostPostID",
                principalTable: "Posts",
                principalColumn: "PostID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Classrooms_ClassroomId",
                table: "Posts",
                column: "ClassroomId",
                principalTable: "Classrooms",
                principalColumn: "ClassroomId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Posts_AnswerPostPostID",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Posts_InsightPostPostID",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Posts_QuestionPostPostID",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Classrooms_ClassroomId",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_AnswerPostPostID",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_InsightPostPostID",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_QuestionPostPostID",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AnnouncementPost_File",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "FeedbackPost_File",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "File",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "isRepliable",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "AnswerPostPostID",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "InsightPostPostID",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "QuestionPostPostID",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "ClassroomId",
                table: "Posts",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Posts",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Classrooms_ClassroomId",
                table: "Posts",
                column: "ClassroomId",
                principalTable: "Classrooms",
                principalColumn: "ClassroomId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
