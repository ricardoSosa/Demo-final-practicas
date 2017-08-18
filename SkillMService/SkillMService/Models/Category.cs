using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SkillMService.Models
{
    public class Category
    {
        //public string id { get; set; }

        public Category()
        {
        }

        public Category(string name)
        {
            this.name = name;
        }
        public string name { get; set; }
    }
}