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
    public class ProjectController : ApiController
    {
        ProjectTrackContext db = new ProjectTrackContext();

        // GET: api/Project
        public IEnumerable<Project> Get()
        {
            return db.Projects.ToList();
        }

        // GET: api/Project/5
        public Project Get(int id)
        {
            return db.Projects.Where(emp => emp.projId == id).FirstOrDefault();
        }

        // POST: api/Project
        public void Post(Project value)
        {
            db.Projects.Add(value);
            db.SaveChanges();
        }

        // PUT: api/Project/5
        public void Put(int id, Project value)
        {
            var existingEmp = db.Projects.Where(emp => emp.projId == id).FirstOrDefault();
            if (existingEmp != null)
            {
                existingEmp.projName = value.projName;
                existingEmp.startDate = value.startDate;
                existingEmp.endDate = value.endDate;
                existingEmp.clientName = value.clientName;
            }
            db.SaveChanges();
        }

        // DELETE: api/Project/5
        public void Delete(int id)
        {
            var del = db.Projects.Where(emp => emp.projId == id).FirstOrDefault();
            db.Projects.Remove(del);
            db.SaveChanges();
        }
    }
}
