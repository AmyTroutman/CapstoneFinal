using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace capstone.Models
{
    public class Loan
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Checkout { get; set; }
        public DateTime Checkin { get; set; }
        public int BookId { get; set; }
        public Book Book { get; set; }
    }
}