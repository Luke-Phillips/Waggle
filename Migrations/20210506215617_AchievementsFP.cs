using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class AchievementsFP : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UnachievedUrl",
                table: "Achievements",
                newName: "UnachievedFilePath");

            migrationBuilder.RenameColumn(
                name: "AchievedUrl",
                table: "Achievements",
                newName: "AchievedFilePath");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UnachievedFilePath",
                table: "Achievements",
                newName: "UnachievedUrl");

            migrationBuilder.RenameColumn(
                name: "AchievedFilePath",
                table: "Achievements",
                newName: "AchievedUrl");
        }
    }
}
