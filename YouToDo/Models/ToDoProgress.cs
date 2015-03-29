using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YouToDo.Models
{
    public class ToDoProgress
    {
        public int Id { get; set; }

        public int ProjectId { get; set; }

        public int TaskId { get; set; }

        public string UserId { get; set; }
    }
}