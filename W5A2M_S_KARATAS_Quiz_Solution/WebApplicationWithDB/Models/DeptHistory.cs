using System;
using System.Collections.Generic;

namespace WebApplicationWithDB.Models;

public partial class DeptHistory
{
    public int Id { get; set; }

    public string? PrevName { get; set; }

    public string? Action { get; set; }

    public int? DeptId { get; set; }
}
