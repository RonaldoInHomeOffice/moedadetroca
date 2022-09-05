//create provider RecompensaProvider
import { Injectable } from '@angular/core';
import { Recompensa } from '../models/recompensa';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class RecompensaProvider {

    private recompensas: Recompensa[] = [];
    private storage: LocalStorageService;

    constructor() {
        this.storage = new LocalStorageService();
        this.recompensas = this.storage.get('recompensas') || [];
    }

    getRecompensas(): Recompensa[] {
        return this.recompensas;
    }

    addRecompensa(recompensa: Recompensa): void {
        this.recompensas.push(recompensa);
        this.storage.set('recompensas', this.recompensas);
    }

    removeRecompensa(recompensa: Recompensa): void {
        const index = this.recompensas.indexOf(recompensa);
        if (index > -1) {
            this.recompensas.splice(index, 1);
            this.storage.set('recompensas', this.recompensas);
        }
    }

    updateRecompensa(recompensa: Recompensa): void {
        const index = this.recompensas.indexOf(recompensa);
        if (index > -1) {
            this.recompensas[index] = recompensa;
            this.storage.set('recompensas', this.recompensas);
        }
    }
}

