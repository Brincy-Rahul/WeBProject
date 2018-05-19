using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace webAPIproject.Models
{
    public class ManagerComment
    {
        [Key]
        [DisplayName("Id")]
        public int commentId { get; set; }
        [DisplayName("Manager Comment")]
        public string comment { get; set; }
        [ForeignKey("Task")]
        [DisplayName("Task Id")]
        public int projTaskId { get; set; }
        public ProjectTask Task { get; set; }
    }
}