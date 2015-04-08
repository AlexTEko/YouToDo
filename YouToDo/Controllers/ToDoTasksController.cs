using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using YouToDo.Models;

namespace YouToDo.Controllers
{
    [Authorize]  //Only authorized users
    public class ToDoTasksController : ApiController
    {
        private YouToDoContext db = new YouToDoContext();

        // GET: api/ToDoTasks
        [Route("api/tasks")]
        public IQueryable<ToDoTask> GetToDoTasks()
        {
            return db.ToDoTasks.Where(x =>x.AssignedTo.Equals(RequestContext.Principal.Identity.Name));
        }

        // GET: api/ToDoTasks/5
        [Route("api/tasks/{id}")]
        [ResponseType(typeof(ToDoTask))]
        public IHttpActionResult GetToDoTask(int id)
        {
            ToDoTask toDoTask = db.ToDoTasks.Find(id);
            if (toDoTask == null)
            {
                return NotFound();
            }

            if ((!User.IsInRole("Manager")) && (!User.IsInRole("Admin")))
                return BadRequest("You are not authorized");

            return Ok(toDoTask);
        }

        // PUT: api/ToDoTasks/5
        [Route("api/tasks/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutToDoTask(int id, ToDoTask toDoTask)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != toDoTask.Id)
            {
                return BadRequest();
            }

            db.Entry(toDoTask).State = EntityState.Modified;

            if ((!User.IsInRole("Manager")) && (!User.IsInRole("Admin")) && (!toDoTask.AssignedTo.Equals(User.Identity.Name)))
                return BadRequest("You are not authorized");

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoTaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { controller = "tasks", id = toDoTask.Id }, toDoTask);
        }

        // POST: api/ToDoTasks
        [Route("api/tasks")]
        [ResponseType(typeof(ToDoTask))]
        public IHttpActionResult PostToDoTask(ToDoTask toDoTask)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if ((!User.IsInRole("Manager")) && (!User.IsInRole("Admin")))
                return BadRequest("You are not authorized");

            toDoTask.TaskStatus = "Assigned";

            toDoTask.TaskDateStart = DateTime.Now;

            db.ToDoTasks.Add(toDoTask);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "tasks", id = toDoTask.Id }, toDoTask);
        }

        // DELETE: api/ToDoTasks/5
        [Route("api/tasks/{id}")]
        [ResponseType(typeof(ToDoTask))]
        public IHttpActionResult DeleteToDoTask(int id)
        {
            ToDoTask toDoTask = db.ToDoTasks.Find(id);
            if (toDoTask == null)
            {
                return NotFound();
            }

            if ((!User.IsInRole("Manager")) && (!User.IsInRole("Admin")))
                return BadRequest("You are not authorized");

            db.ToDoTasks.Remove(toDoTask);
            db.SaveChanges();

            return Ok(toDoTask);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ToDoTaskExists(int id)
        {
            return db.ToDoTasks.Count(e => e.Id == id) > 0;
        }
    }
}