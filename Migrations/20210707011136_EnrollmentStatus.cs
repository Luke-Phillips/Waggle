using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class EnrollmentStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isEnrolled",
                table: "ApplicationUserClassrooms");

            migrationBuilder.AddColumn<int>(
                name: "EnrollmentStatus",
                table: "ApplicationUserClassrooms",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EnrollmentStatus",
                table: "ApplicationUserClassrooms");

            migrationBuilder.AddColumn<bool>(
                name: "isEnrolled",
                table: "ApplicationUserClassrooms",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }
    }
}
