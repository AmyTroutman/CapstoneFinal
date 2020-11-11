using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class UpdatedBook : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Loaned",
                table: "Books",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Loaned",
                table: "Books");
        }
    }
}
