using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Security.Claims;

namespace capstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : ControllerBase
    {

        private ApplicationDbContext _context;
        public BooksController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
            return _context.Books.Where(b => b.UserId == userId).ToArray();
        }

        [HttpGet("{id}")]
        public Book Get([FromRoute] int id)
        {
            var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
            var book = _context.Books.Where(b => b.UserId == userId).FirstOrDefault(b => b.Id == id);
            return book;
        }

        [HttpPost]
        public Book Post([FromBody] Book book)
        {
            var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

            book.UserId = userId;
            _context.Books.Add(book);
            _context.SaveChanges();
            return book;


        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _context.Remove(id);
            return Ok();
        }
    }
}