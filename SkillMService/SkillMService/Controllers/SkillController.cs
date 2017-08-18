using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SkillMService.Results;
using SkillMService.DataAccess;
using Neo4jClient;

namespace SkillMService.Controllers
{
    [RoutePrefix("api/Skill")]
    public class SkillController : ApiController
    {
        [Route("getList")]
        public SkillsResult Get()
        {
            return SkillDAO.GetList();
        }

        [Route("getSkill")]
        public SkillsCategoryResult getSkill(string id)
        {
            return SkillDAO.getSkill(id);
        }


        [Route("getEmployees")]
        public SkillEmployeesResult getEmployees(string id)
        {
            return SkillDAO.getEmployees(id);
        }


        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        [Route("createSkill")]
        public string createSkill(string skillName)
        {
            return SkillDAO.createSkill(skillName);
        }


        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        [Route("updateSkill")]
        public string modifySkill(string skillName, string newName)
        {
            return SkillDAO.modifySkill(skillName, newName);
        }

        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        [Route("relateSkillGroup")]
        public string relateSkillToSkillGroup(string skillName, string skillGroupName)
        {
            return SkillDAO.relateSkillToSkillGroup(skillName, skillGroupName);
        }
        
    }
   
    
}
