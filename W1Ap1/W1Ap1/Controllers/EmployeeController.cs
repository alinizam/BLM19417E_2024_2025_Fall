using Microsoft.AspNetCore.Mvc;
using W1Ap1.Models;

namespace W1Ap1.Controllers
{
    public class EmployeeController : Controller
    {
       
        IDBContext _repo;

        public EmployeeController(IDBContext repo)
        {
            
            _repo = repo;
        }

        [HttpGet]

        public IActionResult Index()
        {
            ViewBag.CompanyName = "FSMVÜ";
            ViewData["CompanyN"] = "Fatih Sultan";
            return View(_repo.getEmployees());
        }


        public IActionResult GetDeptEmployees(int Id)
        {
             
            return View("Index",_repo.getDeptEmployees(Id));
        }

        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(Employee employee)
        {
            _repo.addEmployee(employee);
            return RedirectToAction("Index");
        }
        
        public IActionResult Delete(int Id)
        {
            _repo.deleteEmployees(Id);
            return RedirectToAction("Index");
        }


    }
}
