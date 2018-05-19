using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace webAPIproject.Models
{
    public class UserStory
    {
        [Key]
        [DisplayName("Id")]
        public int userStoryId { get; set; }
        [DisplayName("User Story")]
        public string story { get; set; }

        [ForeignKey("Project")]
        [DisplayName("Project Id")]
        public int projId { get; set; }
        [System.Runtime.Serialization.IgnoreDataMember]
        public Project Project { get; set; }
    }
}