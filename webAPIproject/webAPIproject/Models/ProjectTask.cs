using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace webAPIproject.Models
{
    public class ProjectTask
    {
        [Key]
        [DisplayName("Id")]
        public int taskId { get; set; }
        [DisplayName("Start Date")]
        public DateTime startDate { get; set; }
        [DisplayName("End Date")]
        public DateTime endDate { get; set; }
        [DisplayName("Completion Date")]
        public DateTime? completion { get; set; }

        [ForeignKey("Employee")]
        [DisplayName("Assigned To")]
        public int empId { get; set; }
        [System.Runtime.Serialization.IgnoreDataMember]
        public Employee Employee { get; set; }

        [ForeignKey("UserStory")]
        [DisplayName("UserStory Id")]
        public int userStoryId { get; set; }
        [System.Runtime.Serialization.IgnoreDataMember]
        public UserStory UserStory { get; set; }
    }
}