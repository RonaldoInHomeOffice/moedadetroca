import { Component } from '@angular/core';
import { MoedaProvider } from './providers/moeda-provider';
import { MoedaTroca } from './models/moeda-troca';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoedaDeTroca';
  moedas: MoedaTroca[] = [];
  moeda: MoedaTroca = new MoedaTroca();


  //create form input MoedaDeTroca
  moedaTrocaForm = new FormGroup({
    nome: new FormControl('Nome', Validators.required),
    sigla: new FormControl('Sigla', Validators.required),
    valor: new FormControl('Valor', Validators.required),
    data: new FormControl('Data', Validators.required)
  });


  constructor(public modedaProvider: MoedaProvider) {
  }

  ngOnInit() {
    this.moedas = this.modedaProvider.getMoedas();
  }




}
