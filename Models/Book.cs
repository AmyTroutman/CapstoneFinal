using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace capstone.Models
{
    public class Book
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Genre { get; set; }
        public string Series { get; set; }
        public string Type { get; set; }
        public string Notes { get; set; }
        public string Status { get; set; }
        public bool Loaned { get; set; }

        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
