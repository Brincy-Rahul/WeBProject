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
    public class ProjectTaskController : ApiController
    {
        ProjectTrackContext db = new ProjectTrackContext();
        // GET: api/ProjectTask
        public IEnumerable<ProjectTask> Get()
        {
            return db.Tasks.ToList();
        }

        // GET: api/ProjectTask/5
        public ProjectTask Get(int id)
        {
            return db.Tasks.Where(emp => emp.taskId == id).FirstOrDefault();
        }

        // POST: api/ProjectTask
        public void Post(ProjectTask value)
        {
            db.Tasks.Add(value);
            db.SaveChanges();
        }

        // PUT: api/ProjectTask/5
        public void Put(int id, ProjectTask value)
        {
            var existingEmp = db.Tasks.Where(emp => emp.taskId == id).FirstOrDefault();
            if (existingEmp != null)
            {
                existingEmp.startDate = value.startDate;
                existingEmp.endDate = value.endDate;
                existingEmp.completion = value.completion;
                existingEmp.empId = value.empId;
                existingEmp.userStoryId = value.userStoryId;
            }
            db.SaveChanges();
        }

        // DELETE: api/ProjectTask/5
        public void Delete(int id)
        {
            var del = db.Tasks.Where(emp => emp.taskId == id).FirstOrDefault();
            db.Tasks.Remove(del);
            db.SaveChanges();
        }
    }
}
