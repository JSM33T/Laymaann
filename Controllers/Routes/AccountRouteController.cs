﻿using almondcove.Filters;
using almondcove.Models;
using Almondcove.Interefaces.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace almondcove.Controllers.Routes
{
    public class AccountRouteController(ILogger<AccountRouteController> logger) : Controller
    {
        private readonly ILogger<AccountRouteController> _logger = logger;

        [Perm("guest")]
        [Route("/account")]
        public IActionResult Index() => View("Views/Account/Index.cshtml");
        

        [Perm("guest")]
        [Route("/account/login")]
        public IActionResult Login() => View("Views/Account/Login.cshtml");
       
        
        [Perm("guest")]
        [Route("/account/sign-up")]
        public IActionResult SignUp() => View("Views/Account/SignUp.cshtml");
       

        [Perm("guest")]
        [Route("/account/recover-account")]
        public IActionResult AccountRecovery() => View("Views/Account/AccountRecovery.cshtml");

        [Route("/account/logout")]
        public void LogOut()
        {
            Response.Cookies.Delete("SessionKey");
            HttpContext.Session.Clear();
            Response.Redirect("/");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() => View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
