import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/shared/model/aluno-model';

@Component({
  selector: 'app-consulta-alunos',
  templateUrl: './consulta-alunos.component.html',
  styleUrls: ['./consulta-alunos.component.css']
})

export class ConsultaAlunosComponent implements OnInit {

alunos: Aluno[] = []
quantidadeDeAlunos: number = 0

constructor(){}

ngOnInit(): void {
this.alunos = [
  {
    nome: 'João Abreu',
    idade: 32,
    observacoes:'Aluno Apto à se exercitar'
  },
  {
    nome: 'Julia Teixeira',
    idade: 18,
    observacoes:'Aluna Apta à se exercitar'
  },
  {
    nome: 'José da Silva',
    idade: 45,
    observacoes:'Aluno Inapto à se exercitar'
  },
  {
    nome: 'Pedro da Silva',
    idade: 24,
    observacoes:'Aluno Apto à se exercitar'
  },
];

this.quantidadeDeAlunos = this.alunos.length;

}

}
