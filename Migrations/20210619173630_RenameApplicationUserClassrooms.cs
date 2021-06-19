using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class RenameApplicationUserClassrooms : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppUserClassrooms");

            migrationBuilder.CreateTable(
                name: "ApplicationUserClassrooms",
                columns: table => new
                {
                    ApplicationUserId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ClassroomId = table.Column<int>(type: "int", nullable: false),
                    IsModerator = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    isEnrolled = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    DisplayName = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationUserClassrooms", x => new { x.ApplicationUserId, x.ClassroomId });
                    table.ForeignKey(
                        name: "FK_ApplicationUserClassrooms_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ApplicationUserClassrooms_Classrooms_ClassroomId",
                        column: x => x.ClassroomId,
                        principalTable: "Classrooms",
                        principalColumn: "ClassroomId",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationUserClassrooms_ClassroomId",
                table: "ApplicationUserClassrooms",
                column: "ClassroomId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApplicationUserClassrooms");

            migrationBuilder.CreateTable(
                name: "AppUserClassrooms",
                columns: table => new
                {
                    ApplicationUserId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ClassroomId = table.Column<int>(type: "int", nullable: false),
                    DisplayName = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    IsModerator = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    isEnrolled = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUserClassrooms", x => new { x.ApplicationUserId, x.ClassroomId });
                    table.ForeignKey(
                        name: "FK_AppUserClassrooms_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppUserClassrooms_Classrooms_ClassroomId",
                        column: x => x.ClassroomId,
                        principalTable: "Classrooms",
                        principalColumn: "ClassroomId",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_AppUserClassrooms_ClassroomId",
                table: "AppUserClassrooms",
                column: "ClassroomId");
        }
    }
}
