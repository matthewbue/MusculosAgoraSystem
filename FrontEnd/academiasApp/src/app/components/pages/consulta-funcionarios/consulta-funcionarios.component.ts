import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/shared/model/funcionario-model';

@Component({
  selector: 'app-consulta-funcionarios',
  templateUrl: './consulta-funcionarios.component.html',
  styleUrls: ['./consulta-funcionarios.component.css'],
})
export class ConsultaFuncionariosComponent implements OnInit {
  /*
Atributos
*/
  funcionarios: Funcionario[] = [];
  quantidadeDeFuncionarios: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.funcionarios = [
      {
        nome: 'João Abreu',
        idade: 32,
        cargo: 'Gerente',
      },
      {
        nome: 'Evelyn',
        idade: 30,
        cargo: 'Sócia',
      },
      {
        nome: 'Elen',
        idade: 22,
        cargo: 'Atendente',
      },
      {
        nome: 'Matheus',
        idade: 28,
        cargo: 'Personal',
      },
    ];

    this.quantidadeDeFuncionarios = this.funcionarios.length;
  }
}
