using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Waggle.Migrations
{
    public partial class StringImagesFiles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "Classrooms");

            migrationBuilder.AlterColumn<string>(
                name: "File",
                table: "Posts",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "longblob",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Icon",
                table: "Classrooms",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "ProfilePicture",
                table: "ApplicationUserClassrooms",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Icon",
                table: "Classrooms");

            migrationBuilder.DropColumn(
                name: "ProfilePicture",
                table: "ApplicationUserClassrooms");

            migrationBuilder.AlterColumn<byte[]>(
                name: "File",
                table: "Posts",
                type: "longblob",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "Classrooms",
                type: "longblob",
                nullable: true);
        }
    }
}
