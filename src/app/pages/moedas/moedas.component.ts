import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoedaTroca } from 'src/app/models/moeda-troca';
import { MoedaProvider } from 'src/app/providers/moeda-provider';
import { ToastController } from "toast-controller";

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrls: ['./moedas.component.css']
})
export class MoedasComponent implements OnInit {


  moedas: MoedaTroca[] = [];

  moedaTrocaForm = new FormGroup({
    nome: new FormControl('Nome', Validators.required),
    sigla: new FormControl('Sigla', Validators.required),
    valor: new FormControl('Valor', Validators.required)
  });

  constructor(public moedaProvider: MoedaProvider) { }

  ngOnInit() {
    this.moedas = this.moedaProvider.getMoedas();
  }


  get f() {
    return this.moedaTrocaForm.controls;
  }

  onSubmit() {
    if (this.moedaTrocaForm.status === 'VALID') {
      console.log(this.moedaTrocaForm.value);
      this.moedaProvider.addMoeda(this.moedaTrocaForm.value);
      this.moedas = this.moedaProvider.getMoedas();
      this.resetValue();
    }
  }

  setValue(nome, sigla, valor, data) {
    this.moedaTrocaForm.setValue({ nome: nome, sigla: sigla, valor: valor, data: data });
  }

  resetValue() {
    this.moedaTrocaForm.reset({ nome: '', sigla: '', valor: '', data: '' });
  }

  deleteMoeda(moeda: MoedaTroca) {
    this.moedaProvider.removeMoeda(moeda);
    this.moedas = this.moedaProvider.getMoedas();
  }

  editMoeda(moeda: MoedaTroca) {
    this.setValue(moeda.nome, moeda.sigla, moeda.valor, moeda.data);
  }


}
