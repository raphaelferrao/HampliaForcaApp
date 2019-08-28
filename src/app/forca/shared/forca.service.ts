import { Platform } from '@ionic/angular';
import { QuestaoMockService } from './questao-mock.service';
import { QuestaoService } from './questao.service';
import { LetraResposta } from './letra-resposta';
import { Injectable } from '@angular/core';
import { Questao } from './questao';
import { Util } from 'src/app/core/util';

@Injectable({
  providedIn: 'root'
})
export class ForcaService {

  private qtdQuestoes: number;
  private UTIL: Util = new Util();
  private posicoesQuestoesJaSorteadas: number[] = [];
  private idsQuestoesJaSorteadas: number[] = [];

  constructor(private platform: Platform,
              private questaoService: QuestaoService,
              private questaoMockService: QuestaoMockService) {

      this.obterTotalQuestoes();
  }

  private async obterTotalQuestoes() {
    if (!this.platform.is('mobileweb') && !this.platform.is('desktop')) {
      this.qtdQuestoes = await this.questaoService.getQtd();
    } else {
      this.qtdQuestoes = await this.questaoMockService.getQtd();
    }
  }

  async obterQuestaoAleatoria() {
    let questao: Questao = null;

    if (!this.platform.is('mobileweb') && !this.platform.is('desktop')) {
      if (this.idsQuestoesJaSorteadas.length === this.qtdQuestoes) {
        this.idsQuestoesJaSorteadas = [];
      }

      let idQuestaoRandom = Math.floor(Math.random() * (this.qtdQuestoes)) + 1;
      while (this.idsQuestoesJaSorteadas.indexOf(idQuestaoRandom) > -1) {
        idQuestaoRandom = Math.floor(Math.random() * (this.qtdQuestoes)) + 1;
      }
      this.idsQuestoesJaSorteadas.push(idQuestaoRandom);

      questao = await this.questaoService.getById(idQuestaoRandom);

    } else {
      if (this.posicoesQuestoesJaSorteadas.length === this.qtdQuestoes) {
        this.posicoesQuestoesJaSorteadas = [];
      }

      let posQuestaoRandom = Math.floor(Math.random() * (this.qtdQuestoes));
      console.log(posQuestaoRandom);
      while (this.posicoesQuestoesJaSorteadas.indexOf(posQuestaoRandom) > -1) {
        posQuestaoRandom = Math.floor(Math.random() * (this.qtdQuestoes));
        console.log(posQuestaoRandom);
      }
      this.posicoesQuestoesJaSorteadas.push(posQuestaoRandom);

      questao = await this.questaoMockService.getByPos(posQuestaoRandom);
    }

    return questao;
  }

  desmontarRespostaQuestao(resposta: string): LetraResposta[] {
    const letrasResposta: LetraResposta[] = [];

    if (resposta) {
      for (const charResposta of resposta) {
        let letra: string = '';
        let ehCharEspecial: boolean = false;
        let letraDescoberta: boolean = false;

        if ( (charResposta) && (this.UTIL.isSpecialChar(charResposta)) ) {
          letra = charResposta;
          ehCharEspecial = true;
          letraDescoberta = true;
        }

        const letraResposta: LetraResposta = new LetraResposta(letra.toUpperCase(), letraDescoberta, letraDescoberta, ehCharEspecial);
        letrasResposta.push(letraResposta);
      }
    }

    return letrasResposta;
  }

  calcularQtdDicasDisponiveis(resposta: string): number {
    let qtdDicasDisponiveis: number = 0;
    if (resposta) {
      if ( (resposta.length >= 1) && (resposta.length <= 5) ) {
        qtdDicasDisponiveis = 1;
      } else if ( (resposta.length >= 6) && (resposta.length <= 10) ) {
        qtdDicasDisponiveis = 2;
      } else if ( (resposta.length >= 11) ) {
        qtdDicasDisponiveis = 3;
      }
    }
    return qtdDicasDisponiveis;
  }

  obterOpcoesLetrasResposta(): LetraResposta[][] {
    const opcoesLetrasResposta: LetraResposta[][] = [];
    let opcoesLetrasRespostaLinha: LetraResposta[] = [];

    for (let i = 65, j = 1; i <= 90; i++, j++) {
      const opcaoLetraResposta: LetraResposta = new LetraResposta(String.fromCharCode(i).toUpperCase(), false, false);
      opcoesLetrasRespostaLinha.push(opcaoLetraResposta);

      if (j % 9 === 0) {
        opcoesLetrasResposta.push(opcoesLetrasRespostaLinha);
        opcoesLetrasRespostaLinha = [];
      } else if (i === 90) {
        const opcaoLetraRespostaBotaoDica: LetraResposta = new LetraResposta('', false, false);
        opcaoLetraRespostaBotaoDica.botaoDica = true;
        opcoesLetrasRespostaLinha.push(opcaoLetraRespostaBotaoDica);
        opcoesLetrasResposta.push(opcoesLetrasRespostaLinha);
      }
    }

    return opcoesLetrasResposta;
  }



}
