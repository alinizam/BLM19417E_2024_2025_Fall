
namespace W1Ap1.Models
{
    public class DBContext : IDBContext
    {
        public static List<Employee> employees = new List<Employee>() { 
            new Employee{Id=1,FirstName="Ahmet",LastName="Ak",deptId=1},
            new Employee{Id=2,FirstName="Mehmet",LastName="Ak",deptId=1 },
            new Employee{Id=3,FirstName="Kemal",LastName="Ak" , deptId = 2},
        };

        public static List<Department> departments= new List<Department>() {
            new Department{deptID=1,name="IT" },
            new Department{deptID=2,name="HR"}
        };
        public void addEmployee(Employee employee)
        {
            employees.Add(employee);
        }

        public List<Employee> getEmployees()
        {
           return employees;
        }

        public void deleteEmployees(int Id)
        {
            var employee = employees.Find(e=>e.Id==Id);
            if (employee != null)
            {
                employees.Remove(employee);
            }
        }

        public List<Department> getDepartments()
        {
            return departments;
        }

        public List<Employee> getDeptEmployees(int deptId)
        {
            return employees.Where(e=>e.deptId==deptId).ToList();
        }
    }
}
