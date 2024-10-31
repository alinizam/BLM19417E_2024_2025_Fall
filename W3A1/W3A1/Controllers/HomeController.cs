using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using W3A1.Models;

namespace W3A1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewData["CompanyName"] = "FSMVÜ";
            return View();
        }

        public IActionResult CallProcessPage() {
            ViewData["ViewCompanyName"] = "View FSMVÜ";
            TempData["TempCompanyName"] = "Temp FSMVÜ";
            return RedirectToAction("Index");
        }
        
        public IActionResult DataProcessPage()
        {
            ViewData["CompanyName"] = "FSMVÜ";
            ViewData["Student"] = new Student { 
                Id=1,
                Name="Ahmet"
            };


            ViewBag.UniversityName = "FSMVÜ";
            ViewBag.StudentObject = new Student
            {
                Id = 1,
                Name = "Ahmet"
            };

            TempData["TempCompanyName"] = "FSMVÜ";

            ViewBag.studentList= new List<Student>() {

            new Student {
                Id=1,
                Name="Ahmet"
            },
            new Student {
                Id=2,
                Name="Ayþe"
            },
            new Student {
                Id=3,
                Name="Kemal"
            }


        };
      
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
