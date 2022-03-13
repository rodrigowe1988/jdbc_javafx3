import { Component, OnInit } from '@angular/core';

import { Conta } from 'src/app/Conta';
import { NomeDasContas } from 'src/app/NomeDasContas';

@Component({
  selector: 'app-investiments-table',
  templateUrl: './investiments-table.component.html',
  styleUrls: ['./investiments-table.component.css']
})
export class InvestimentsTableComponent implements OnInit {

  nomeDasContas: NomeDasContas [] = [
  {
    data: "Data",
    rico: "Rico",
    modal: "Modal",
    clear: "Clear",
    sicredi: "Sicredi",
    santander: "Santander",
    bradesco: "Bradesco",
    nubank: "Nubank",
  }
  ];

  contas: Conta [] = [

    {data: "06/03/2022", rico: 85713.59, modal: 73587.37, clear: 24144.00, sicredi: 7424.22, santander: 5177.64, bradesco: 2594.08, nubank:293.25},
    {data: "08/03/2022", rico: 85360.00, modal: 73199.00, clear: 23527.00, sicredi: 7424.00, santander: 5177.64, bradesco: 2594.00, nubank:184.00},
    {data: "09/03/2022", rico: 85232.18, modal: 72922.69, clear: 23997.05, sicredi: 10514.65, santander: 5177.64, bradesco: 2594.08, nubank: 8.51},
    {data: "10/03/2022", rico: 85304.04, modal: 73053.86, clear: 23816.99, sicredi: 9914.00, santander: 5177.64, bradesco: 2594.08, nubank: 8.51},
    {data: "12/03/2022", rico: 85399.31, modal: 73077.49, clear: 23843.41, sicredi: 10485.13, santander: 5177.64, bradesco: 2594.08, nubank: 8.51},

  ];

  total: number = 0;
  diaAnalisado = '';

  constructor() { }

  ngOnInit(): void {
  }

  totalSomar(conta: Conta) {
    this.total = conta.rico + conta.modal + conta.clear + conta.sicredi + conta.bradesco + conta.santander + conta.nubank;
    this.diaAnalisado = conta.data;
  }

}