using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MyWebApi
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("");
            routes.IgnoreRoute("frontend");
            routes.MapPageRoute("DefaultIndex", "{*anything}", "~/index.html");
        }
    }
}
