using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace webAPIproject.Models
{
    public class Project
    {
        [Key]
        [DisplayName("Id")]
        public int projId { get; set; }
        [DisplayName("Project Name")]
        public string projName { get; set; }
        [DisplayName("Start Date")]
        public DateTime startDate { get; set; }
        [DisplayName("End Date")]
        public DateTime endDate { get; set; }
        [DisplayName("Client Name")]
        public string clientName { get; set; }
    }
}