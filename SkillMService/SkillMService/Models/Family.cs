﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SkillMService.Models
{
    public class Family
    {
        //public string id { get; set; }

        public Family(string name)
        {
            this.name = name;
        }
        public Family()
        {
            
        }
        public string id { get; set; }
        public string name { get; set; }
    }
}