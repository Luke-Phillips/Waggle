using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class AddReplyPosts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ReplyToPostId",
                table: "Posts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Posts_ReplyToPostId",
                table: "Posts",
                column: "ReplyToPostId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Posts_ReplyToPostId",
                table: "Posts",
                column: "ReplyToPostId",
                principalTable: "Posts",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Posts_ReplyToPostId",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_ReplyToPostId",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "ReplyToPostId",
                table: "Posts");
        }
    }
}
