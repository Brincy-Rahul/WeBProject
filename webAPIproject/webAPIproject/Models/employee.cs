using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace webAPIproject.Models
{
    public class Employee
    {
        [Key]
        [DisplayName("Id")]
        public int empId { get; set; }

        [Required(ErrorMessage = "Please Enter Employee Name")]
        [DisplayName("Employee Name")]
        public string empName { get; set; }

        [Required(ErrorMessage = "Please Enter Designation")]
        [DisplayName("Designation")]
        public string designation { get; set; }


        [DisplayName("Contact No")]
        public int? contactNo { get; set; }

        [DisplayName("Email Id")]
        [Required(ErrorMessage = "Email is required.")]
        //[RegularExpression(@"^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$",
        //    ErrorMessage ="Please Enter EmailId")]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        public string emailId { get; set; }

        [Required(ErrorMessage = "Please Enter SkillSet")]
        [DisplayName("Skill Set")]
        public string skillSet { get; set; }

        [ForeignKey("Manager")]
        [DisplayName("Manager")]
        public int? managerId { get; set; }
        [System.Runtime.Serialization.IgnoreDataMember]
        public Employee Manager { get; set; }
    }
}