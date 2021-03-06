﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YouToDo.Models
{
    public class ToDoTask
    {
        public int Id { get; set; }

        public int Project { get; set; }

        public string AssignedTo { get; set; }

        public string TaskPriority { get; set; }

        public string TaskText { get; set; }

        public string TaskDescription { get; set; }

        public string TaskComment { get; set; }

        public DateTime TaskDateStart { get; set; }

        public DateTime TaskDateDeadline { get; set; }

        public string TaskStatus { get; set; }
    }
}