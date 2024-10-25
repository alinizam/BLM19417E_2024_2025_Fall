namespace W1Ap1.Models
{
    public interface IDBContext
    {
        void addEmployee(Employee employee);
        List<Employee> getEmployees();
        public void deleteEmployees(int Id);

        List<Department> getDepartments();
        List<Employee> getDeptEmployees(int deptId);


    }
}
