import { AtividadeTroca } from "./atividade-troca";

export class Recompensa {

    id: number;
    atividade: AtividadeTroca;
    data: Date;
    tempoTotal: number;
    utilizada: boolean;
    dataUtilizacao: Date;

}