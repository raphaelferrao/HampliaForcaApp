import { Util } from './../../core/util';
import { Questao } from './questao';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestaoMockService {

  private util: Util = new Util();

  private questoes: Questao[] = [];

  constructor() {
    this.cargaQuestoes();
  }

  private cargaQuestoes(): void {
    const q1: Questao = new Questao();
    q1.id = 1;
    q1.ano = 2012;
    q1.idBanca = 1;
    q1.idOrgao = 1;
    q1.idProva = 1;
    q1.idAssunto = 1;
    q1.idSiteOrigem = 'Q973873';
    q1.enunciado = 'O núcleo do sistema operacional, os drivers, os utilitários e os aplicativos são representados internamente por instruções de máquina, e se diferenciam de acordo com sua capacidade de interagir com o hardware. Enquanto aplicativos e utilitários possuem acesso mais restrito, os drivers e o núcleo devem ter pleno acesso ao hardware para poder configurá-lo e gerenciá- lo. Para que os acessos sejam diferenciados dentre os diversos elementos de software, os processadores contam com';
    q1.resposta = 'níveis de privilégio de execução';
    q1.banca.id = 1;
    q1.banca.nome = 'FEMPERJ';
    q1.orgao.id = 1;
    q1.orgao.nome = 'TCE-RJ';
    q1.prova.id = 1;
    q1.prova.nome = 'Analista de Controle Externo - Organizacional - Tecnologia da Informação';
    q1.assunto.id = 1;
    q1.assunto.nome = 'Sistemas Operacionais';
    this.questoes.push(q1);

    const q2: Questao = new Questao();
    q2.id = 2;
    q2.ano = 2012;
    q2.idBanca = 1;
    q2.idOrgao = 1;
    q2.idProva = 1;
    q2.idAssunto = 2;
    q2.idSiteOrigem = 'Q973868';
    q2.enunciado = 'Alguns firewalls têm a capacidade de guardar o estado das últimas conexões efetuadas e inspecionar o tráfego para diferenciar pacotes legítimos dos ilegítimos, em função do estado dessas conexões. Esse tipo de firewall tem a denominação de';
    q2.resposta = 'Firewall Stateful Inspection';
    q2.banca.id = 1;
    q2.banca.nome = 'FEMPERJ';
    q2.orgao.id = 1;
    q2.orgao.nome = 'TCE-RJ';
    q2.prova.id = 1;
    q2.prova.nome = 'Analista de Controle Externo - Organizacional - Tecnologia da Informação';
    q2.assunto.id = 2;
    q2.assunto.nome = 'Segurança da Informação';
    this.questoes.push(q2);

    const q3: Questao = new Questao();
    q3.id = 24;
    q3.ano = 2018;
    q3.idBanca = 2;
    q3.idOrgao = 2;
    q3.idProva = 2;
    q3.idAssunto = 7;
    q3.idSiteOrigem = 'Q949806';
    q3.enunciado = 'A forma de navegação por nível de granularidade em um modelo de dados dimensional em que os detalhes de uma informação sejam recuperados de outra estrutura é chamada';
    q3.resposta = 'drill-through';
    q3.banca.id = 2;
    q3.banca.nome = 'CESPE';
    q3.orgao.id = 2;
    q3.orgao.nome = 'TCE-MG';
    q3.prova.id = 2;
    q3.prova.nome = 'Analista de Controle Externo - Ciência da Computação';
    q3.assunto.id = 7;
    q3.assunto.nome = 'Banco de Dados';
    this.questoes.push(q3);

    const q4: Questao = new Questao();
    q4.id = 43;
    q4.ano = 2015;
    q4.idBanca = 4;
    q4.idOrgao = 6;
    q4.idProva = 6;
    q4.idAssunto = 7;
    q4.idSiteOrigem = 'Q567881';
    q4.enunciado = 'No Oracle, a linguagem procedural que permite estreito acoplamento com o SQL é conhecida como';
    q4.resposta = 'PL/SQL';
    q4.banca.id = 4;
    q4.banca.nome = 'FGV';
    q4.orgao.id = 6;
    q4.orgao.nome = 'TCE-SE';
    q4.prova.id = 6;
    q4.prova.nome = 'Analista de Tecnologia da Informação - Desenvolvimento';
    q4.assunto.id = 7;
    q4.assunto.nome = 'Banco de Dados';
    this.questoes.push(q4);

    const q5: Questao = new Questao();
    q5.id = 3;
    q5.ano = 2012;
    q5.idBanca = 1;
    q5.idOrgao = 1;
    q5.idProva = 1;
    q5.idAssunto = 3;
    q5.idSiteOrigem = 'Q973866';
    q5.enunciado = 'Um incômodo frequente no ambiente de correio eletrônico é o recebimento de mensagens não solicitadas, chamadas de spam. Uma técnica usada para diminuir o recebimento de spam é o uso de';
    q5.resposta = 'Sender Policy Framework';
    q5.banca.id = 1;
    q5.banca.nome = 'FEMPERJ';
    q5.orgao.id = 1;
    q5.orgao.nome = 'TCE-RJ';
    q5.prova.id = 1;
    q5.prova.nome = 'Analista de Controle Externo - Organizacional - Tecnologia da Informação';
    q5.assunto.id = 1;
    q5.assunto.nome = 'Sistemas Operacionais';
    this.questoes.push(q5);
  }

  getQtd() {
    const qtdQuestoes = this.questoes.length;
    console.log('qtdQuestoes', qtdQuestoes);
    return qtdQuestoes;
  }

  getById(id: number) {
    const ehIdIgual = (item: Questao) => {
      return item.id === id ;
    };

    const questoesMesmoId = this.questoes.filter( ehIdIgual );
    if (questoesMesmoId && questoesMesmoId.length > 0) {
      const questao: Questao = questoesMesmoId[0];
      if (questao) {
        questao.resposta = this.util.removeAccents(questao.resposta.toUpperCase());
        questao.montarCabecalho();
        console.log('questao', questao);
        return questao;
      } else {
        return new Questao();
      }
    } else {
      return new Questao();
    }
  }

  getByPos(pos: number) {
    const questao: Questao = this.questoes[pos];
    if (questao) {
      questao.resposta = this.util.removeAccents(questao.resposta.toUpperCase());
      questao.montarCabecalho();
      console.log('questao', questao);
      return questao;
    } else {
      return new Questao();
    }
  }

}
