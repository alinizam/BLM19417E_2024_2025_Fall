using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using System.Diagnostics;
using W6A2.Models;

namespace W6A2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public async Task<IActionResult> Index()
        {
            var departments=new List<Department>();
            var httpclient = new HttpClient();
             
            httpclient.DefaultRequestHeaders.Add("Key", "abc112");    
            var response = await httpclient.GetAsync("https://localhost:7129/api/Departments");
            

            if (response.StatusCode == System.Net.HttpStatusCode.OK){ 
                var responseString = await response.Content.ReadAsStringAsync();
                departments = JsonConvert.DeserializeObject<List<Department>>(responseString);
            }
            return View(departments);
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
