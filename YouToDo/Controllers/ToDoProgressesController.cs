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
    [Authorize]
    public class ToDoProgressesController : ApiController
    {
        private YouToDoContext db = new YouToDoContext();

        // GET: api/ToDoProgresses
        [Route("api/progress")]
        public IQueryable<ToDoProgress> GetToDoProgresses()
        {
            return db.ToDoProgresses;
        }

        // GET: api/ToDoProgresses/5
        [Route("api/progress/{id}")]
        [ResponseType(typeof(ToDoProgress))]
        public IHttpActionResult GetToDoProgress(string id)
        {
            //ToDoProgress toDoProgress = db.ToDoProgresses.Find(id);
            var UserTasksId = db.ToDoProgresses.Where(c => c.UserId.Equals(id));
            List<ToDoTask> toDoTasks = new List<ToDoTask>();
            List<int> TaskIds = new List<int>();
            foreach (var UserTaskId in UserTasksId)
            {
                TaskIds.Add(UserTaskId.TaskId);
            }

            foreach (int TaskId in TaskIds)
            {
                ToDoTask toDoTask = db.ToDoTasks.Find(TaskId);
                if (toDoTask != null)
                {
                    toDoTasks.Add(toDoTask);
                }
            }

            if (toDoTasks == null)
            {
                return NotFound();
            }

            return Ok(toDoTasks);
        }

        // PUT: api/ToDoProgresses/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutToDoProgress(int id, ToDoProgress toDoProgress)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != toDoProgress.Id)
            {
                return BadRequest();
            }

            db.Entry(toDoProgress).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoProgressExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ToDoProgresses
        [Route("api/progress")]
        [ResponseType(typeof(ToDoProgress))]
        public IHttpActionResult PostToDoProgress(ToDoProgress toDoProgress)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ToDoProgresses.Add(toDoProgress);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "progress", id = toDoProgress.Id }, toDoProgress);
        }

        // DELETE: api/ToDoProgresses/5
        [ResponseType(typeof(ToDoProgress))]
        public IHttpActionResult DeleteToDoProgress(int id)
        {
            ToDoProgress toDoProgress = db.ToDoProgresses.Find(id);
            if (toDoProgress == null)
            {
                return NotFound();
            }

            db.ToDoProgresses.Remove(toDoProgress);
            db.SaveChanges();

            return Ok(toDoProgress);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ToDoProgressExists(int id)
        {
            return db.ToDoProgresses.Count(e => e.Id == id) > 0;
        }
    }
}