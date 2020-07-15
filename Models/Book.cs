using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class Book
    {
        public int Id {get;set;}
        public string Title {get;set;}
        public string Author {get;set;}
        public string Series {get;set;}
        public string Type {get;set;}
        public string UserId {get;set;}
        public ApplicationUser User {get;set;}
    }
}
