using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SkillMService.Models;

namespace SkillMService.Results
{
    public class SkillsCategoryResult: Skill
    {
        public SkillsCategoryResult() { }
        
        public List<Category> SkillGroups { get; set; }
    }
}
