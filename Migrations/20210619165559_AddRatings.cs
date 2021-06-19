using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class AddRatings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                name: "AnswerPostPostID",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "InsightPostPostID",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "QuestionPostPostID",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<int>(
                name: "RatingId",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Ratings",
                columns: table => new
                {
                    RatingId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ApplicationUserId = table.Column<int>(type: "int", nullable: false),
                    PostId = table.Column<int>(type: "int", nullable: false),
                    BinaryMetric = table.Column<bool>(type: "tinyint(1)", nullable: true),
                    NumericMetric = table.Column<int>(type: "int", nullable: true),
                    AnswerPostPostID = table.Column<int>(type: "int", nullable: true),
                    FeedbackPostPostID = table.Column<int>(type: "int", nullable: true),
                    FeedbackRequestPostPostID = table.Column<int>(type: "int", nullable: true),
                    InsightPostPostID = table.Column<int>(type: "int", nullable: true),
                    QuestionPostPostID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ratings", x => x.RatingId);
                    table.ForeignKey(
                        name: "FK_Ratings_Posts_AnswerPostPostID",
                        column: x => x.AnswerPostPostID,
                        principalTable: "Posts",
                        principalColumn: "PostID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Ratings_Posts_FeedbackPostPostID",
                        column: x => x.FeedbackPostPostID,
                        principalTable: "Posts",
                        principalColumn: "PostID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Ratings_Posts_FeedbackRequestPostPostID",
                        column: x => x.FeedbackRequestPostPostID,
                        principalTable: "Posts",
                        principalColumn: "PostID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Ratings_Posts_InsightPostPostID",
                        column: x => x.InsightPostPostID,
                        principalTable: "Posts",
                        principalColumn: "PostID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Ratings_Posts_QuestionPostPostID",
                        column: x => x.QuestionPostPostID,
                        principalTable: "Posts",
                        principalColumn: "PostID",
                        onDelete: ReferentialAction.Restrict);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_RatingId",
                table: "AspNetUsers",
                column: "RatingId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_AnswerPostPostID",
                table: "Ratings",
                column: "AnswerPostPostID");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_FeedbackPostPostID",
                table: "Ratings",
                column: "FeedbackPostPostID");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_FeedbackRequestPostPostID",
                table: "Ratings",
                column: "FeedbackRequestPostPostID");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_InsightPostPostID",
                table: "Ratings",
                column: "InsightPostPostID");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_QuestionPostPostID",
                table: "Ratings",
                column: "QuestionPostPostID");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Ratings_RatingId",
                table: "AspNetUsers",
                column: "RatingId",
                principalTable: "Ratings",
                principalColumn: "RatingId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Ratings_RatingId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_RatingId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RatingId",
                table: "AspNetUsers");

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
        }
    }
}
