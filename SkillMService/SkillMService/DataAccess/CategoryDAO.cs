using SkillMService.App_Start;
using SkillMService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SkillMService.DataAccess
{
    public class CategoryDAO
    {
        public static string createSkillCategory(string skillGroupName)
        {
            string result = "";

            if (skillGroupName != "")
            {
                if (existsSkillCategory(skillGroupName))
                {
                    result = "The skill actually exists.";
                }
                else
                {
                    string id = skillGroupName.Replace(" ", "-");
                    Category newSkillGroup = new Category(skillGroupName);
                    DBConnection.GraphClient().Cypher
                        .Merge("(sk:SkillGroup {name: {name}})")
                        .OnCreate()
                        .Set("sk = {newSkillGroup}")
                        .WithParams(new
                        {
                            name = newSkillGroup.name,
                            newSkillGroup
                        })
                        .Set("sk.id = {id}")
                        .WithParam("id", id)
                        .ExecuteWithoutResults();
                    result = "The skill has been created.";
                }
            }
            else
            {
                result = "The skill needs a name.";
            }
            return result;
        }

        public static bool existsSkillCategory(string skillGroupName)
        {
            bool exists = false;

            var skillGroup =
                DBConnection.GraphClient().Cypher
                .Match("(skgp:SkillGroup)")
                .Where("skgp.name = {skillGroupName}")
                .WithParam("skillGroupName", skillGroupName)
                .Return(skgp => skgp.As<Category>().name)
                .Results.SingleOrDefault();

            if (skillGroup == null)
            {
                exists = false;
            }
            else
            {
                exists = true;
            }

            return exists;
        }

    }
}