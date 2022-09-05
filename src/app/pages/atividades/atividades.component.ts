import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtividadeTroca } from 'src/app/models/atividade-troca';
import { MoedaTroca } from 'src/app/models/moeda-troca';
import { AtividadeTrocaProvider } from 'src/app/providers/atividade-troca.provider';
import { MoedaProvider } from 'src/app/providers/moeda-provider';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  atividades: AtividadeTroca[] = [];
  moedas: MoedaTroca[] = [];

  constructor(public atividadeProvider: AtividadeTrocaProvider, public moedatrocaProvider: MoedaProvider) { }

  ngOnInit() {
    this.moedas = this.moedatrocaProvider.getMoedas();
    this.atividades = this.atividadeProvider.getAtividades();
  }

  //FormGroup of atividadeForm
  atividadeForm = new FormGroup({
    nome: new FormControl('Nome', Validators.required),
    quantidadeMoedas: new FormControl('quantidadeMoedas', Validators.required),
    moeda: new FormControl('Moeda', Validators.required)
  });

  //get form controls
  get f() {
    return this.atividadeForm.controls;
  }
  //resetValue
  resetValue() {
    this.atividadeForm.reset({ nome: '', quantidadeMoedas: '' });
  }

  //onSubmit
  onSubmit() {
    if (this.atividadeForm.status === 'VALID') {
      console.log(this.atividadeForm.value);
      this.atividadeProvider.addAtividade(this.atividadeForm.value);
      this.atividades = this.atividadeProvider.getAtividades();
      this.resetValue();
    }
  }
  //setValue
  setValue(nome, quantidadeMoedas) {
    this.atividadeForm.setValue({ nome: nome, quantidadeMoedas: quantidadeMoedas });
  }
  //deleteAtividade
  deleteAtividade(atividade: AtividadeTroca) {
    this.atividadeProvider.removeAtividade(atividade);
    this.atividades = this.atividadeProvider.getAtividades();
  }
  //editAtividade
  editAtividade(atividade: AtividadeTroca) {
    this.setValue(atividade.nome, atividade.quantidadeMoedas);
  }

}
