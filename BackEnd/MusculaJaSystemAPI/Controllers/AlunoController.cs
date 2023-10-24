using Domain.Interface;
using Microsoft.AspNetCore.Mvc;
using Domain.Entities;

namespace MusculaJaSystemAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunoController : ControllerBase
    {
        private readonly IAlunoService _alunoService; 
        public AlunoController(IAlunoService alunoService)
        {
            _alunoService = alunoService;
        }

        // Finaliza Aluno 
        // Controller 

        [HttpPost(Name = "CreateAluno")] 
        public ActionResult CreateAluno (Aluno objetoAluno)
        {
           string resultado = _alunoService.CreateAluno(objetoAluno);

            return Ok(resultado);
        }

        [HttpGet(Name = "GetAllAlunos")]
        public ActionResult GetAllAlunos()
        {
           var listaAlunos = _alunoService.GetAllAluno();

            return Ok(listaAlunos);
        }
           

        }

}
