using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YouToDo.Models
{
    public class ToDoUsers
    {
        public int Id { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }

        public string Username { get; set; }

        public string Department { get; set; }

        public string Position { get; set; }

        public string Status { get; set; }
    }
}