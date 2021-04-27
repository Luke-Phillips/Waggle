using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class CompositeClassroomUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassroomUsers",
                table: "ClassroomUsers");

            migrationBuilder.DropIndex(
                name: "IX_ClassroomUsers_ClassroomID",
                table: "ClassroomUsers");

            migrationBuilder.DropColumn(
                name: "ClassroomUserID",
                table: "ClassroomUsers");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassroomUsers",
                table: "ClassroomUsers",
                columns: new[] { "ClassroomID", "UserID" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassroomUsers",
                table: "ClassroomUsers");

            migrationBuilder.AddColumn<int>(
                name: "ClassroomUserID",
                table: "ClassroomUsers",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassroomUsers",
                table: "ClassroomUsers",
                column: "ClassroomUserID");

            migrationBuilder.CreateIndex(
                name: "IX_ClassroomUsers_ClassroomID",
                table: "ClassroomUsers",
                column: "ClassroomID");
        }
    }
}
