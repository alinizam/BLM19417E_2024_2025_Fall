using System;
using System.Collections.Generic;

namespace W6A1.Models;

public partial class Student
{
    public int Id { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public int? DepartmentId { get; set; }

    public int? Grade { get; set; }

    public virtual Department? Department { get; set; }
}
