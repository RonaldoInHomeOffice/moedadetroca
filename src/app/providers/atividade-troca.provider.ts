import { Injectable } from '@angular/core';
import { AtividadeTroca } from '../models/atividade-troca';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AtividadeTrocaProvider {

    private atividades: AtividadeTroca[] = [];
    private storage: LocalStorageService;

    constructor() {
        this.storage = new LocalStorageService();
        this.atividades = this.storage.get('atividades') || [];
    }

    getAtividades(): AtividadeTroca[] {
        return this.atividades;
    }


    addAtividade(atividade: AtividadeTroca): void {
        this.atividades.push(atividade);
        this.storage.set('atividades', this.atividades);
    }

    removeAtividade(atividade: AtividadeTroca): void {
        const index = this.atividades.indexOf(atividade);
        if (index > -1) {
            this.atividades.splice(index, 1);
            this.storage.set('atividades', this.atividades);
        }
    }
}
