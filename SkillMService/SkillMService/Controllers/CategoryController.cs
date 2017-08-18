using SkillMService.DataAccess;
using SkillMService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace SkillMService.Controllers
{
    [RoutePrefix("api/Family")]
   
    public class CategoryController : ApiController
    {


        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        [Route("createSkillGroup")]
        public string createSkillGroup(string skillGroupName)
        {
            return CategoryDAO.createSkillCategory(skillGroupName);
        }        

    }
}
