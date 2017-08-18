using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SkillMService.Models;

namespace SkillMService.Results
{
    public class EmployeeSkillResult : Employee
    {
        public EmployeeSkillResult() { }

        public EmployeeSkillResult( string id, 
                                    string name, 
                                    int location,
                                    List<Skill> jrskills,
                                    List<Skill> intskills,
                                    List<Skill> srskills,
                                    List<Skill> ldskills
                                        )
        {
            this.id = id;
            this.name = name;
            this.location = location;
            this.JrSkills = jrskills;
            this.SrSkills = srskills;
            this.LdSkills = ldskills;
        }

       
        public List<Skill> JrSkills { get; set; }
        public List<Skill> IntSkills { get; set; }
        public List<Skill> SrSkills { get; set; }
        public List<Skill> LdSkills { get; set; }


        public byte Status { get; set; }
    }
}