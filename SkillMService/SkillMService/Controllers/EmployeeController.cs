using System.Web;
using Neo4jClient;
using SkillMService.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using SkillMService.App_Start;
using System.Web.Http;
using SkillMService.DataAccess;

namespace SkillMService.Controllers
{
    [RoutePrefix("api/Employee")]
    public class EmployeeController : ApiController
    {

        [Route("getList")]
        public EmployeeResult Get()
        {
            return EmployeeDAO.GetList();
        }

        [Route("getEmployee")]
        public EmployeeSkillResult GetEmployee(string userID)
        {
            return EmployeeDAO.GetEmployee(userID);
        }


        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        [Route("updateEmployee")]
        public string updateEmployee(string employeeName, string newName)
        {
            return EmployeeDAO.updateEmployee(employeeName, newName);
        }
        

        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        [Route("createEmployee")]
        public string createEmployee(string employeeName)
        {
            return EmployeeDAO.createEmployee(employeeName);
        }

        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        [Route("assignSkill")]
        public string assignSkillToEmployee(string employeeName, string skillName, string skillLevel)
        {
            return EmployeeDAO.assignSkillToEmployee(employeeName, skillName, skillLevel);
        }

        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        [Route("modifySkillLevel")]
        public void modifySkillLevelToEmployee(string employeeName, string skillName, string skillLevel)
        {
            EmployeeDAO.modifySkillLevelToEmployee(employeeName, skillName, skillLevel);
        }
    }
}
