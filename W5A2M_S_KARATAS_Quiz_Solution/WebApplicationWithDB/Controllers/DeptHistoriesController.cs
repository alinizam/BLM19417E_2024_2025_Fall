using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplicationWithDB.Models;

namespace WebApplicationWithDB.Controllers
{
    public class DeptHistoriesController : Controller
    {
        private readonly WebAppDbContext _context;

        public DeptHistoriesController(WebAppDbContext context)
        {
            _context = context;
        }

        // GET: DeptHistories
        public async Task<IActionResult> Index()
        {
            return View(await _context.DeptHistories.ToListAsync());
        }

        // GET: DeptHistories/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var deptHistory = await _context.DeptHistories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (deptHistory == null)
            {
                return NotFound();
            }

            return View(deptHistory);
        }

        // GET: DeptHistories/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: DeptHistories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,PrevName,Action")] DeptHistory deptHistory)
        {
            if (ModelState.IsValid)
            {
                _context.Add(deptHistory);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(deptHistory);
        }

        // GET: DeptHistories/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var deptHistory = await _context.DeptHistories.FindAsync(id);
            if (deptHistory == null)
            {
                return NotFound();
            }
            return View(deptHistory);
        }

        // POST: DeptHistories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,PrevName,Action")] DeptHistory deptHistory)
        {
            if (id != deptHistory.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(deptHistory);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DeptHistoryExists(deptHistory.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(deptHistory);
        }

        // GET: DeptHistories/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var deptHistory = await _context.DeptHistories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (deptHistory == null)
            {
                return NotFound();
            }

            return View(deptHistory);
        }

        // POST: DeptHistories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var deptHistory = await _context.DeptHistories.FindAsync(id);
            if (deptHistory != null)
            {
                _context.DeptHistories.Remove(deptHistory);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DeptHistoryExists(int id)
        {
            return _context.DeptHistories.Any(e => e.Id == id);
        }
    }
}
