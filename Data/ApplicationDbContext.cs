using Microsoft.EntityFrameworkCore;
using todo_react.Model;

namespace todo_react.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }
        public DbSet<MyTasks> Task { get; set; }
    }
}