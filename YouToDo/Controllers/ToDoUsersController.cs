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
    public class ToDoUsersController : ApiController
    {
        private YouToDoContext db = new YouToDoContext();

        // GET: api/ToDoUsers
        public IQueryable<ToDoUsers> GetToDoUsers()
        {
            return db.ToDoUsers;
        }

        // GET: api/ToDoUsers/5
        [ResponseType(typeof(ToDoUsers))]
        public IHttpActionResult GetToDoUsers(int id)
        {
            ToDoUsers toDoUsers = db.ToDoUsers.Find(id);
            if (toDoUsers == null)
            {
                return NotFound();
            }

            return Ok(toDoUsers);
        }

        // PUT: api/ToDoUsers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutToDoUsers(int id, ToDoUsers toDoUsers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != toDoUsers.Id)
            {
                return BadRequest();
            }

            db.Entry(toDoUsers).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoUsersExists(id))
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

        // POST: api/ToDoUsers
        [ResponseType(typeof(ToDoUsers))]
        public IHttpActionResult PostToDoUsers(ToDoUsers toDoUsers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ToDoUsers.Add(toDoUsers);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = toDoUsers.Id }, toDoUsers);
        }

        // DELETE: api/ToDoUsers/5
        [ResponseType(typeof(ToDoUsers))]
        public IHttpActionResult DeleteToDoUsers(int id)
        {
            ToDoUsers toDoUsers = db.ToDoUsers.Find(id);
            if (toDoUsers == null)
            {
                return NotFound();
            }

            db.ToDoUsers.Remove(toDoUsers);
            db.SaveChanges();

            return Ok(toDoUsers);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ToDoUsersExists(int id)
        {
            return db.ToDoUsers.Count(e => e.Id == id) > 0;
        }
    }
}