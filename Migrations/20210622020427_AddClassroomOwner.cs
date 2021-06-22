using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class AddClassroomOwner : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OwnerId",
                table: "Classrooms",
                type: "varchar(255)",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Classrooms_OwnerId",
                table: "Classrooms",
                column: "OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Classrooms_AspNetUsers_OwnerId",
                table: "Classrooms",
                column: "OwnerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Classrooms_AspNetUsers_OwnerId",
                table: "Classrooms");

            migrationBuilder.DropIndex(
                name: "IX_Classrooms_OwnerId",
                table: "Classrooms");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "Classrooms");
        }
    }
}
