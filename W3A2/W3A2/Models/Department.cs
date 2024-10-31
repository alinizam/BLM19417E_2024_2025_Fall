using System;
using System.Collections.Generic;

namespace W3A2.Models;

public partial class Department
{
    public int Id { get; set; }

    public string? DeptName { get; set; }

    public virtual ICollection<Student> Students { get; set; } = new List<Student>();
}
