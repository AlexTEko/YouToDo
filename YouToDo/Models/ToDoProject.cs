using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;

namespace YouToDo.Models
{
    public class ToDoProject
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ProjectLeader { get; set; }

    }

    [NotMapped]
    public class ToDoProjectView : ToDoProject
    {
        public List<ToDoTask> Tasks { get; set; }

    }
}