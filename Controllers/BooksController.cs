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
            if(book == null) return null;
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

        [HttpPut("{id}")]
        public Book Put([FromRoute] int id, [FromBody] Book book)
        {
            // var currentBook = _context.Books.Find(book.Id);
            // I think this is the one I want:
            var currentBook = _context.Books.FirstOrDefault(b => b.Id == id);
            if(currentBook == null) return null;
           
            _context.Entry(currentBook).CurrentValues.SetValues(book);
            _context.Books.Update(book);
            _context.SaveChanges();
            return book;
        }

        [HttpDelete("{id}")]
        public void Delete([FromRoute] int id)
        {
            // Do I need to find the book associated with the id and pass that into Remove()?
            var book = _context.Books.FirstOrDefault(b => b.Id == id);
            _context.Books.Remove(book);
            _context.SaveChanges();
        }
    }
}