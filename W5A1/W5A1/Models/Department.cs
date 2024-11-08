using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace W5A1.Models;

public partial class Department
{
    [Required(ErrorMessage = "Id is required")]
    public int Id { get; set; }
    [Required(ErrorMessage = "An Department Name is required")]
    [StringLength(10)]
    public string? DeptName { get; set; }

    public virtual ICollection<Student> Students { get; set; } = new List<Student>();
}
