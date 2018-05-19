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
    public class EmployeeController : ApiController
    {
        ProjectTrackContext db = new ProjectTrackContext();
        // GET: api/Employee
        public IEnumerable<Employee> Get()
        {
            return db.Employees.ToList();
        }

        // GET: api/Employee/5
        public Employee Get(int id)
        {
            return db.Employees.Where(emp => emp.empId == id).FirstOrDefault();
        }

        // POST: api/Employee
        public void Post(Employee value)
        {
            db.Employees.Add(value);
            db.SaveChanges();
        }

        // PUT: api/Employee/5
        public void Put(int id, Employee value)
        {
            var existingEmp = db.Employees.Where(emp => emp.empId == id).FirstOrDefault();
            if(existingEmp!= null)
            {
                existingEmp.empName = value.empName;
                existingEmp.designation = value.designation;
                existingEmp.contactNo = value.contactNo;
                existingEmp.emailId = value.emailId;
                existingEmp.skillSet = value.skillSet;
                existingEmp.managerId = value.managerId;
            }
            db.SaveChanges();
        }

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
            var del = db.Employees.Where(emp => emp.empId == id).FirstOrDefault();
            db.Employees.Remove(del);
            db.SaveChanges();
        }
    }
}
