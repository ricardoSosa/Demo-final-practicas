﻿using Neo4jClient;
using SkillMService.App_Start;
using SkillMService.Models;
using SkillMService.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SkillMService.DataAccess
{
    public class EmployeeDAO
    {
        public static  EmployeeResult GetList()
        {
            List<Employee> parentsList = DBConnection.GraphClient().Cypher
                    .Match("(child:Emp)")
                    .Return(child => child.As<Employee>())
                    .Results.ToList<Employee>();
            return new EmployeeResult(parentsList, 1);
        }


        public static EmployeeSkillResult GetEmployee(string userID)
        {
            Employee parentsList = DBConnection.GraphClient().Cypher
                    .Match("(child:Emp)")
                    .Where("child.id = {id}")
                    .WithParam("id", userID)
                    .Return(child => child.As<Employee>())
                    .Results.Single();

            EmployeeSkillResult empSkill = new EmployeeSkillResult();
            empSkill.id = parentsList.id;
            empSkill.name = parentsList.name;
            empSkill.location = parentsList.location;

            List<Skill> jrskills = DBConnection.GraphClient().Cypher
                    .Match("(emp:Emp)-[r:Knows]->(s:Skill)")
                    .Where("emp.id = {id} and r.value = '1'")
                    .WithParam("id", userID)
                    .Return(s => s.As<Skill>())
                    .Results.ToList<Skill>();

            List<Skill> intskills = DBConnection.GraphClient().Cypher
                    .Match("(emp:Emp)-[r:Knows]->(s:Skill)")
                    .Where("emp.id = {id} and r.value = '2'")
                    .WithParam("id", userID)
                    .Return(s => s.As<Skill>())
                    .Results.ToList<Skill>();

            List<Skill> srskills = DBConnection.GraphClient().Cypher
                    .Match("(emp:Emp)-[r:Knows]->(s:Skill)")
                    .Where("emp.id = {id} and r.value = '3'")
                    .WithParam("id", userID)
                    .Return(s => s.As<Skill>())
                    .Results.ToList<Skill>();


            List<Skill> ldskills = DBConnection.GraphClient().Cypher
                    .Match("(emp:Emp)-[r:Knows]->(s:Skill)")
                    .Where("emp.id = {id} and r.value = '4'")
                    .WithParam("id", userID)
                    .Return(s => s.As<Skill>())
                    .Results.ToList<Skill>();

            empSkill.JrSkills = jrskills;
            empSkill.IntSkills = intskills;
            empSkill.SrSkills = srskills;
            empSkill.LdSkills = ldskills;


            empSkill.Status = 1;

            return empSkill;
        }

        public static string updateEmployee(string employeeName, string newName)
        {
            string result = "";

            if (employeeName != "" && newName != "")
            {
                if (existsEmployee(employeeName))
                {
                    if (existsEmployee(newName))
                    {
                        result = "Actually exists an employee with that new name.";
                    }
                    else
                    {
                        DBConnection.GraphClient().Cypher
                            .Match("(emp:Employee)")
                            .Where("emp.name = {employeeName}")
                            .WithParam("employeeName", employeeName)
                            .Set("emp.name = {newName}")
                            .WithParam("newName", newName)
                            .ExecuteWithoutResults();
                        result = "The employee has been modified.";
                    }
                }
                else
                {
                    result = "The employee doesn't exists.";
                }
            }
            else
            {
                result = "The parameters cannot be empty.";
            }
            return result;
        }

        private static bool existsEmployee(string employeeName)
        {
            bool exists = false;

            var employee =
                DBConnection.GraphClient().Cypher
                .Match("(emp:Emp)")
                .Where("emp.name = {employeeName}")
                .WithParam("employeeName", employeeName)
                .Return(emp => emp.As<Employee>().name)
                .Results.SingleOrDefault();

            if (employee == null)
            {
                exists = false;
            }
            else
            {
                exists = true;
            }
            return exists;
        }

        public static string createEmployee(string employeeName)
        {
            string result = "";

            if (employeeName != "" && !existsEmployee(employeeName))
            {
                string id = employeeName.Replace(" ", "-");
                Employee newEmployee = new Employee(employeeName);
                DBConnection.GraphClient().Cypher
                    .Merge("(emp:Emp {name: {name}})")
                    .OnCreate()
                    .Set("emp = {newEmployee}")
                    .WithParams(new
                    {
                        name = newEmployee.name,
                        newEmployee
                    })
                    .Set("emp.id = {id}")
                    .WithParam("id", id)
                    .ExecuteWithoutResults();
                result = "The employee has been created.";
                return result;
            }
            else
            {
                result = "The employee need a name.";
                return result;
            }
        }

        public static string assignSkillToEmployee(string employeeName, string skillName, string skillLevel)
        {
            string result = "";

            if (employeeName != "" && skillName != "" && skillLevel != "")
            {
                if (skillLevel == "Junior" || skillLevel == "Intermediate" || skillLevel == "Senior" || skillLevel == "Lead")
                {
                    if (existsEmployee(employeeName) && SkillDAO.existsSkill(skillName))
                    {
                        if (isEmployeeRelatedToSkill(employeeName, skillName))
                        {
                            modifySkillLevelToEmployee(employeeName, skillName, skillLevel);
                        }
                        else
                        {
                            DBConnection.GraphClient().Cypher
                                .Match("(emp:Emp), (sk:Skill)")
                                .Where("emp.name = {employeeName}")
                                .WithParam("employeeName", employeeName)
                                .AndWhere("sk.name = {skillName}")
                                .WithParam("skillName", skillName)
                                .Create("(emp)-[:Knows {value: {skillLevel}}]->(sk)")
                                .WithParam("skillLevel", skillLevel)
                                .ExecuteWithoutResults();
                        }
                        result = "Assigned level";
                    }
                    else
                    {
                        result = "The employee or skill doesn't exist.";
                    }
                }
                else
                {
                    result = "Invalid skill level.";
                }
            }
            else
            {
                result = "The parameters cannot be empty.";
            }

            return result;
        }

        private static bool isEmployeeRelatedToSkill(string employeeName, string skillName)
        {
            bool isRelated = false;

            var result =
                DBConnection.GraphClient().Cypher
                .Match("(emp:Emp)-[rel]->(sk:Skill)")
                .Where("emp.name = {employeeName}")
                .WithParam("employeeName", employeeName)
                .AndWhere("sk.name = {skillName}")
                .WithParam("skillName", skillName)
                .Return(rel => new {
                    R = rel.As<RelationshipInstance<object>>()
                }).Results;

            if (result.Count() != 0)
            {
                isRelated = true;
            }

            return isRelated;
        }

        public static void modifySkillLevelToEmployee(string employeeName, string skillName, string skillLevel)
        {
            DBConnection.GraphClient().Cypher
                .Match("(emp:Emp)-[rel:Knows]->(sk:Skill)")
                .Where("emp.name = {employeeName}")
                .WithParam("employeeName", employeeName)
                .AndWhere("sk.name = {skillName}")
                .WithParam("skillName", skillName)
                .Set("rel.value = {skillLevel}")
                .WithParam("skillLevel", skillLevel)
                .ExecuteWithoutResults();
        }
    }
}