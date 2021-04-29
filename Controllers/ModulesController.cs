using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Waggle.Data;
using Waggle.Models;

namespace Waggle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModulesController : ControllerBase
    {
        private readonly WaggleContext _context;

        public ModulesController(WaggleContext context)
        {
            _context = context;
        }

        // GET: api/Modules/5
       /* [HttpGet("{classID}")]
        public async Task<ActionResult<List<Module>>> GetModules(int classID)
        {
            var mod = await _context.Module
                .Where(m => m.ClassID == classID)
                .ToListAsync();

            if (mod == null)
            {
                return NotFound();
            }

            return mod;
        }*/

/*        // PUT: api/Modules/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModule(int id, Module mod)
        {
            if (id != mod.ModuleID)
            {
                return BadRequest();
            }

            _context.Entry(mod).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModuleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Modules
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Module>> PostModule(Module mod)
        {
            _context.Module.Add(mod);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetModule", new { id = mod.ModuleID }, mod);
        }

        // DELETE: api/Modules/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModule(int id)
        {
            var mod = await _context.Module.FindAsync(id);
            if (mod == null)
            {
                return NotFound();
            }

            _context.Module.Remove(mod);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModuleExists(int id)
        {
            return _context.Module.Any(e => e.ModuleID == id);
        }*/
    }
}
