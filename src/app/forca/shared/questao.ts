import { Assunto } from './assunto';
import { Banca } from './banca';
import { Prova } from './prova';
import { Orgao } from './orgao';
export class Questao {

    id: number;
    idBanca: number;
    idOrgao: number;
    idProva: number;
    idAssunto: number;
    ano: number;
    cabecalho?: string;
    enunciado: string;
    resposta: string;
    idSiteOrigem: string;

    banca: Banca = new Banca();
    orgao: Orgao = new Orgao();
    prova: Prova = new Prova();
    assunto: Assunto = new Assunto();

    montarCabecalho(): void {
        const header = `${this.banca.nome} - ${this.ano} - ${this.orgao.nome} - ${this.prova.nome} `;
        this.cabecalho = header;
    }
}
