import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtividadeTroca } from 'src/app/models/atividade-troca';
import { Recompensa } from 'src/app/models/recompensa';
import { AtividadeTrocaProvider } from 'src/app/providers/atividade-troca.provider';
import { RecompensaProvider } from 'src/app/providers/recompensa.provider';

@Component({
  selector: 'app-recompensa',
  templateUrl: './recompensa.component.html',
  styleUrls: ['./recompensa.component.css']
})
export class RecompensaComponent implements OnInit {

  recompensas: Recompensa[] = [];
  atividades: AtividadeTroca[] = [];
  atividade: AtividadeTroca;



  constructor(public recompesaProvider: RecompensaProvider, public atividadeProvider: AtividadeTrocaProvider) {
  }

  ngOnInit() {
    this.recompensas = this.recompesaProvider.getRecompensas();
    this.atividades = this.atividadeProvider.getAtividades();
  }

  recompensaForm = new FormGroup({
    atividade: new FormControl('Atividade', Validators.required),
    data: new FormControl('Data', Validators.required),
    tempoTotal: new FormControl('TempoTotal', Validators.required),
    utilizada: new FormControl('Utilizada', Validators.required),
  });

  //setvalue 
  setValue(atividade, data, tempoTotal, utilizada, dataUtilizacao) {
    this.recompensaForm.setValue({ atividade: atividade, data: data, tempoTotal: tempoTotal, utilizada: utilizada, dataUtilizacao: dataUtilizacao });
  }

  //resetvalue
  resetValue() {
    this.recompensaForm.reset({ atividade: '', data: '', tempoTotal: '', utilizada: '', dataUtilizacao: '' });
  }
  //get form
  get f() {
    return this.recompensaForm.controls;
  }

  //onSubmit
  onSubmit() {
    if (this.recompensaForm.status === 'VALID') {
      console.log(this.recompensaForm.value);
      this.recompesaProvider.addRecompensa(this.recompensaForm.value);
      this.recompensas = this.recompesaProvider.getRecompensas();
      this.resetValue();
    }
  }


  //deleteRecompensa
  delete(recompensa: Recompensa) {
    this.recompesaProvider.removeRecompensa(recompensa);
    this.recompensas = this.recompesaProvider.getRecompensas();
  }

  //editrecompensa
  edit(recompensa: Recompensa) {
    this.setValue(recompensa.atividade, recompensa.data, recompensa.tempoTotal, recompensa.utilizada, recompensa.dataUtilizacao);
  }

  //selectAtividade
  selectAtividade(event) {
    let id = parseInt(event.target.value.split(':')[0]);
    this.atividade = this.atividades[id];
    let tempoTotal = this.atividade.quantidadeMoedas * this.atividade.moeda.valor;
    this.setValue(this.atividade, null, tempoTotal, false, null);
  }

}
