﻿using System;
using System.Linq;
using System.Web.Security;
using MyWebApi.Models;

namespace MyWebApi.Providers
{
    public class HelpDeskRoleProvider : RoleProvider
    {
        public override string[] GetRolesForUser(string login)
        {
            string[] role = { };
            using (MyDatabaseEntities db = new MyDatabaseEntities())
            {
                try
                {
                    User user = (from u in db.Users
                                 where u.Name == login
                                 select u).FirstOrDefault();
                    if (user != null)
                    {
                        Role userRole = db.Roles.Find(user.RoleId);

                        if (userRole != null)
                        {
                            role = new[] { userRole.Name };
                        }
                    }
                }
                catch
                {
                    role = new string[] { };
                }
            }
            return role;
        }

        public override bool IsUserInRole(string username, string roleName)
        {
            bool outputResult = false;
            using (MyDatabaseEntities db = new MyDatabaseEntities())
            {
                try
                {
                    User user = (from u in db.Users
                                 where u.Name == username
                                 select u).FirstOrDefault();
                    if (user != null)
                    {
                        Role userRole = db.Roles.Find(user.RoleId);

                        if (userRole != null && userRole.Name == roleName)
                        {
                            outputResult = true;
                        }
                    }
                }
                catch
                {
                    outputResult = false;
                }
            }
            return outputResult;
        }
        
        public override void AddUsersToRoles(string[] usernames, string[] roleNames)
        {
            throw new NotImplementedException();
        }

        public override void CreateRole(string roleName)
        {
            throw new NotImplementedException();
        }

        public override string ApplicationName
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public override bool DeleteRole(string roleName, bool throwOnPopulatedRole)
        {
            throw new NotImplementedException();
        }

        public override string[] FindUsersInRole(string roleName, string usernameToMatch)
        {
            throw new NotImplementedException();
        }

        public override string[] GetAllRoles()
        {
            throw new NotImplementedException();
        }

        public override string[] GetUsersInRole(string roleName)
        {
            throw new NotImplementedException();
        }

        public override void RemoveUsersFromRoles(string[] usernames, string[] roleNames)
        {
            throw new NotImplementedException();
        }

        public override bool RoleExists(string roleName)
        {
            throw new NotImplementedException();
        }
    }
}