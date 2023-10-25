using Microsoft.AspNetCore.Mvc;
using todo_react.Data;
using todo_react.Model;

namespace todo_react.Controllers;

[ApiController]
[Route("[controller]")]
public class MyTasksController : ControllerBase
{
    private readonly ILogger<MyTasksController> _logger;
    private readonly ApplicationDbContext _db;

    public MyTasksController(ILogger<MyTasksController> logger, ApplicationDbContext db)
    {
        _db = db;
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<MyTasks> Get()
    {
        return _db.Task.ToList();
    }

    [HttpPost("add")]
    public IActionResult Set(MyTasks task)
    {
        try
        {
            _db.Add(task);
            _db.SaveChanges();
        }
        catch (Microsoft.EntityFrameworkCore.DbUpdateException upt)
        {
            return BadRequest(upt.Message);
        }
        return Ok(task);
    }
}