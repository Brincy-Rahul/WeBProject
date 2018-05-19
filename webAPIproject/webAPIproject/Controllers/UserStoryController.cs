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
    public class UserStoryController : ApiController
    {
        ProjectTrackContext db = new ProjectTrackContext();
        // GET: api/UserStory
        public IEnumerable<UserStory> Get()
        {
            return db.UserStories.ToList();
        }

        // GET: api/UserStory/5
        public UserStory Get(int id)
        {
            return db.UserStories.Where(emp => emp.userStoryId == id).FirstOrDefault();
        }

        // POST: api/UserStory
        public void Post(UserStory value)
        {
            db.UserStories.Add(value);
            db.SaveChanges();
        }

        // PUT: api/UserStory/5
        public void Put(int id, UserStory value)
        {
            var existingEmp = db.UserStories.Where(emp => emp.userStoryId == id).FirstOrDefault();
            if (existingEmp != null)
            {
                existingEmp.story = value.story;
                existingEmp.projId = value.projId;
                
            }
            db.SaveChanges();
        }

        // DELETE: api/UserStory/5
        public void Delete(int id)
        {
            var del = db.UserStories.Where(emp => emp.userStoryId == id).FirstOrDefault();
            db.UserStories.Remove(del);
            db.SaveChanges();
        }
    }
}
