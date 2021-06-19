using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class AddClassroomImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "Classrooms",
                type: "longblob",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "Classrooms");
        }
    }
}
