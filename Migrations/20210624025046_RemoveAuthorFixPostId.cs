using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class RemoveAuthorFixPostId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Posts_PostID1",
                table: "Posts");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_AnswerPostPostID",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_FeedbackPostPostID",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_FeedbackRequestPostPostID",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_InsightPostPostID",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Posts_QuestionPostPostID",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Posts_PostID1",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "PostID1",
                table: "Posts");

            migrationBuilder.RenameColumn(
                name: "QuestionPostPostID",
                table: "Ratings",
                newName: "QuestionPostPostId");

            migrationBuilder.RenameColumn(
                name: "InsightPostPostID",
                table: "Ratings",
                newName: "InsightPostPostId");

            migrationBuilder.RenameColumn(
                name: "FeedbackRequestPostPostID",
                table: "Ratings",
                newName: "FeedbackRequestPostPostId");

            migrationBuilder.RenameColumn(
                name: "FeedbackPostPostID",
                table: "Ratings",
                newName: "FeedbackPostPostId");

            migrationBuilder.RenameColumn(
                name: "AnswerPostPostID",
                table: "Ratings",
                newName: "AnswerPostPostId");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_QuestionPostPostID",
                table: "Ratings",
                newName: "IX_Ratings_QuestionPostPostId");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_InsightPostPostID",
                table: "Ratings",
                newName: "IX_Ratings_InsightPostPostId");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_FeedbackRequestPostPostID",
                table: "Ratings",
                newName: "IX_Ratings_FeedbackRequestPostPostId");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_FeedbackPostPostID",
                table: "Ratings",
                newName: "IX_Ratings_FeedbackPostPostId");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_AnswerPostPostID",
                table: "Ratings",
                newName: "IX_Ratings_AnswerPostPostId");

            migrationBuilder.RenameColumn(
                name: "PostID",
                table: "Posts",
                newName: "PostId");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.RenameColumn(
                name: "QuestionPostPostId",
                table: "Ratings",
                newName: "QuestionPostPostID");

            migrationBuilder.RenameColumn(
                name: "InsightPostPostId",
                table: "Ratings",
                newName: "InsightPostPostID");

            migrationBuilder.RenameColumn(
                name: "FeedbackRequestPostPostId",
                table: "Ratings",
                newName: "FeedbackRequestPostPostID");

            migrationBuilder.RenameColumn(
                name: "FeedbackPostPostId",
                table: "Ratings",
                newName: "FeedbackPostPostID");

            migrationBuilder.RenameColumn(
                name: "AnswerPostPostId",
                table: "Ratings",
                newName: "AnswerPostPostID");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_QuestionPostPostId",
                table: "Ratings",
                newName: "IX_Ratings_QuestionPostPostID");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_InsightPostPostId",
                table: "Ratings",
                newName: "IX_Ratings_InsightPostPostID");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_FeedbackRequestPostPostId",
                table: "Ratings",
                newName: "IX_Ratings_FeedbackRequestPostPostID");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_FeedbackPostPostId",
                table: "Ratings",
                newName: "IX_Ratings_FeedbackPostPostID");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_AnswerPostPostId",
                table: "Ratings",
                newName: "IX_Ratings_AnswerPostPostID");

            migrationBuilder.RenameColumn(
                name: "PostId",
                table: "Posts",
                newName: "PostID");

            migrationBuilder.AddColumn<int>(
                name: "PostID1",
                table: "Posts",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Posts_PostID1",
                table: "Posts",
                column: "PostID1");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Posts_PostID1",
                table: "Posts",
                column: "PostID1",
                principalTable: "Posts",
                principalColumn: "PostID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_AnswerPostPostID",
                table: "Ratings",
                column: "AnswerPostPostID",
                principalTable: "Posts",
                principalColumn: "PostID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_FeedbackPostPostID",
                table: "Ratings",
                column: "FeedbackPostPostID",
                principalTable: "Posts",
                principalColumn: "PostID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_FeedbackRequestPostPostID",
                table: "Ratings",
                column: "FeedbackRequestPostPostID",
                principalTable: "Posts",
                principalColumn: "PostID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_InsightPostPostID",
                table: "Ratings",
                column: "InsightPostPostID",
                principalTable: "Posts",
                principalColumn: "PostID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Posts_QuestionPostPostID",
                table: "Ratings",
                column: "QuestionPostPostID",
                principalTable: "Posts",
                principalColumn: "PostID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
