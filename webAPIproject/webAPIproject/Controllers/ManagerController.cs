using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webAPIproject.Common;
using webAPIproject.Models;

namespace webAPIproject.Controllers
{
    public class ManagerController : ApiController
    {
        ProjectTrackContext db = new ProjectTrackContext();
        // GET: api/Manager
        public IEnumerable<ManagerComment> Get()
        {
            return db.ManagerComments.ToList();
        }

        // GET: api/Manager/5
        public ManagerComment Get(int id)
        {
            return db.ManagerComments.Where(emp => emp.commentId == id).FirstOrDefault();
        }

        // POST: api/Manager
        public void Post(ManagerComment value)
        {
            db.ManagerComments.Add(value);
            db.SaveChanges();
        }

        // PUT: api/Manager/5
        public void Put(int id, ManagerComment value)
        {
            var existingEmp = db.ManagerComments.Where(emp => emp.commentId == id).FirstOrDefault();
            if (existingEmp != null)
            {
                existingEmp.comment = value.comment;
                existingEmp.projTaskId = value.projTaskId;
            }
            db.SaveChanges();
        }

        // DELETE: api/Manager/5
        public void Delete(int id)
        {
            var del = db.ManagerComments.Where(emp => emp.commentId == id).FirstOrDefault();
            db.ManagerComments.Remove(del);
            db.SaveChanges();
        }
    }
}
