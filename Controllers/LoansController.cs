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
using Microsoft.EntityFrameworkCore;

namespace capstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoansController : ControllerBase
    {

        private ApplicationDbContext _context;
        public LoansController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Loan> Get()
        {
            return _context.Loans.Include(b =>b.Book).ToArray();
        }

        [HttpGet("{id}")]
        public Loan Get([FromRoute] int id)
        {
            var loan = _context.Loans.Include(b =>b.Book).FirstOrDefault(b => b.Id == id);
            if(loan == null) return null;
            return loan;
        }

        [HttpPost]
        public Loan Post([FromBody] Loan loan)
        {
            _context.Loans.Add(loan);
            _context.SaveChanges();
            return loan;
        }

        [HttpPut("{id}")]
        public Loan Put([FromRoute] int id, [FromBody] Loan loan)
        {
            var currentLoan = _context.Loans.Find(loan.Id);
            if(currentLoan == null) return null;
           
            _context.Entry(currentLoan).CurrentValues.SetValues(loan);
            _context.Loans.Update(currentLoan);
            _context.SaveChanges();
            return currentLoan;
        }

        [HttpDelete("{id}")]
        public void Delete([FromRoute] int id)
        {
            var loan = _context.Loans.FirstOrDefault(b => b.Id == id);
            _context.Loans.Remove(loan);
            _context.SaveChanges();
        }
    }
}