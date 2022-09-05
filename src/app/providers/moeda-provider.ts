import { Injectable } from '@angular/core';
import { MoedaTroca } from '../models/moeda-troca';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class MoedaProvider {

    private moedas: MoedaTroca[] = [];
    private storage: LocalStorageService;

    constructor() {
        this.storage = new LocalStorageService();
        this.moedas = this.storage.get('moedas') || [];
    }

    getMoedas(): MoedaTroca[] {
        return this.moedas;
    }

    addMoeda(moeda: MoedaTroca): void {
        this.moedas.push(moeda);
        this.storage.set('moedas', this.moedas);
    }

    removeMoeda(moeda: MoedaTroca): void {
        const index = this.moedas.indexOf(moeda);
        if (index > -1) {
            this.moedas.splice(index, 1);
            this.storage.set('moedas', this.moedas);
        }
    }

    updateMoeda(moeda: MoedaTroca): void {
        const index = this.moedas.indexOf(moeda);
        if (index > -1) {
            this.moedas[index] = moeda;
            this.storage.set('moedas', this.moedas);
        }
    }
}

