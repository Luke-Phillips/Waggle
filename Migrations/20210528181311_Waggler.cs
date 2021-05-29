using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class Waggler : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AchievementUser");

            migrationBuilder.DropTable(
                name: "ClassroomUsers");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.CreateTable(
                name: "Wagglers",
                columns: table => new
                {
                    WagglerID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Name = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Password = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Points = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wagglers", x => x.WagglerID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AchievementWaggler",
                columns: table => new
                {
                    AchievementsAchievementID = table.Column<int>(type: "int", nullable: false),
                    WagglerID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AchievementWaggler", x => new { x.AchievementsAchievementID, x.WagglerID });
                    table.ForeignKey(
                        name: "FK_AchievementWaggler_Achievements_AchievementsAchievementID",
                        column: x => x.AchievementsAchievementID,
                        principalTable: "Achievements",
                        principalColumn: "AchievementID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AchievementWaggler_Wagglers_WagglerID",
                        column: x => x.WagglerID,
                        principalTable: "Wagglers",
                        principalColumn: "WagglerID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "ClassroomWagglers",
                columns: table => new
                {
                    WagglerID = table.Column<int>(type: "int", nullable: false),
                    ClassroomID = table.Column<int>(type: "int", nullable: false),
                    Role = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DisplayName = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassroomWagglers", x => new { x.ClassroomID, x.WagglerID });
                    table.ForeignKey(
                        name: "FK_ClassroomWagglers_Classrooms_ClassroomID",
                        column: x => x.ClassroomID,
                        principalTable: "Classrooms",
                        principalColumn: "ClassroomID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClassroomWagglers_Wagglers_WagglerID",
                        column: x => x.WagglerID,
                        principalTable: "Wagglers",
                        principalColumn: "WagglerID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_AchievementWaggler_WagglerID",
                table: "AchievementWaggler",
                column: "WagglerID");

            migrationBuilder.CreateIndex(
                name: "IX_ClassroomWagglers_WagglerID",
                table: "ClassroomWagglers",
                column: "WagglerID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AchievementWaggler");

            migrationBuilder.DropTable(
                name: "ClassroomWagglers");

            migrationBuilder.DropTable(
                name: "Wagglers");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Name = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Password = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Points = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AchievementUser",
                columns: table => new
                {
                    AchievementsAchievementID = table.Column<int>(type: "int", nullable: false),
                    UsersUserID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AchievementUser", x => new { x.AchievementsAchievementID, x.UsersUserID });
                    table.ForeignKey(
                        name: "FK_AchievementUser_Achievements_AchievementsAchievementID",
                        column: x => x.AchievementsAchievementID,
                        principalTable: "Achievements",
                        principalColumn: "AchievementID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AchievementUser_Users_UsersUserID",
                        column: x => x.UsersUserID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "ClassroomUsers",
                columns: table => new
                {
                    ClassroomID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    DisplayName = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Role = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassroomUsers", x => new { x.ClassroomID, x.UserID });
                    table.ForeignKey(
                        name: "FK_ClassroomUsers_Classrooms_ClassroomID",
                        column: x => x.ClassroomID,
                        principalTable: "Classrooms",
                        principalColumn: "ClassroomID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClassroomUsers_Users_UserID",
                        column: x => x.UserID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_AchievementUser_UsersUserID",
                table: "AchievementUser",
                column: "UsersUserID");

            migrationBuilder.CreateIndex(
                name: "IX_ClassroomUsers_UserID",
                table: "ClassroomUsers",
                column: "UserID");
        }
    }
}
