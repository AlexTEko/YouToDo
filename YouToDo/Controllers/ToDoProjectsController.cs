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
    public class ToDoProjectsController : ApiController
    {
        private YouToDoContext db = new YouToDoContext();

        // GET: api/projects
        [Route("api/projects")]
        public IQueryable<ToDoProject> GetToDoProjects()
        {
            return db.ToDoProjects;
        }

        // GET: api/projects/5
        [Route("api/projects/{id}")]
        [ResponseType(typeof(ToDoProject))]
        public IHttpActionResult GetToDoProject(int id)
        {
            ToDoProject toDoProject = db.ToDoProjects.Find(id);
            if (toDoProject == null)
            {
                return NotFound();
            }

            return Ok(toDoProject);
        }

        // PUT: api/ToDoProjects/5
        [Route("api/projects/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutToDoProject(int id, ToDoProject toDoProject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != toDoProject.Id)
            {
                return BadRequest();
            }

            db.Entry(toDoProject).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoProjectExists(id))
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

        // POST: api/ToDoProjects
        [Route("api/projects")]
        [ResponseType(typeof(ToDoProject))]
        public IHttpActionResult PostToDoProject(ToDoProject toDoProject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ToDoProjects.Add(toDoProject);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "projects", id = toDoProject.Id }, toDoProject);
        }

        // DELETE: api/ToDoProjects/5
        [Route("api/projects/{id}")]
        [ResponseType(typeof(ToDoProject))]
        public IHttpActionResult DeleteToDoProject(int id)
        {
            ToDoProject toDoProject = db.ToDoProjects.Find(id);
            if (toDoProject == null)
            {
                return NotFound();
            }

            db.ToDoProjects.Remove(toDoProject);
            db.SaveChanges();

            return Ok(toDoProject);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ToDoProjectExists(int id)
        {
            return db.ToDoProjects.Count(e => e.Id == id) > 0;
        }
    }
}