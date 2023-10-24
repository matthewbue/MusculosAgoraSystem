using Domain.Entities;
using Domain.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Service
{
    public class AlunoService : IAlunoService
    {
        public string CreateAluno(Aluno ObjetoAluno)
        {
            return "Cadastro com sucesso";
        }

        public List<Aluno> GetAllAluno()
        {
            throw new NotImplementedException();
        }
    }
}
