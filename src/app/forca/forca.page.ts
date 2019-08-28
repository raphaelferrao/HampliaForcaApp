import { Router } from '@angular/router';
import { LoadingService } from './../core/service/loading.service';
import { ToastService } from './../core/service/toast.service';
import { AlertService } from './../core/service/alert.service';
import { ForcaService } from './shared/forca.service';
import { NUMERO_MAXIMO_TENTATIVAS_FORCA } from './../core/constantes';
import { LetraResposta } from './shared/letra-resposta';
import { Questao } from './shared/questao';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-forca',
  templateUrl: './forca.page.html',
  styleUrls: ['./forca.page.scss'],
})
export class ForcaPage implements OnInit {

  questao: Questao = new Questao();
  letrasResposta: LetraResposta[] = [];
  opcoesLetrasResposta: LetraResposta[][] = [];
  numeroErros: number = 0;
  acertouResposta: boolean = false;
  finalizouForca: boolean = false;
  urlImagemForca: string = `../../assets/imgs/forca-0.png`;
  qtdDicasDisponiveis: number = 0;

  constructor( private alertService: AlertService,
               private toastService: ToastService,
               private loadingService: LoadingService,
               private forcaService: ForcaService,
               private router: Router,
               private changeRef: ChangeDetectorRef ) {

  }

  ngOnInit() {
    this.inicializarForca();
  }

  ionViewDidEnter() {
    document.querySelector('#ionItemLetrasResposta').shadowRoot
            .querySelector('.input-wrapper').setAttribute('style', 'display:block');
    /*
    document.querySelector('#ionItemLetrasErradas').shadowRoot
            .querySelector('.input-wrapper').setAttribute('style', 'display:block');
    */
  }

  async ionViewWillEnter() {

  }

  async inicializarForca() {
    const idUltimaQuestao = (this.questao && this.questao.id && (this.questao.id > 0)) ? this.questao.id : 0;
    this.urlImagemForca = `../../assets/imgs/forca-0.png`;
    this.numeroErros = 0;
    this.acertouResposta = false;
    this.finalizouForca = false;
    this.questao = new Questao();
    this.letrasResposta = [];
    this.opcoesLetrasResposta = this.forcaService.obterOpcoesLetrasResposta();

    await this.loadingService.showLoading();
    this.questao = await this.forcaService.obterQuestaoAleatoria();
    console.log(this.questao.id);
    while ( (idUltimaQuestao === this.questao.id) ) {
      this.questao = await this.forcaService.obterQuestaoAleatoria();
    }
    console.log('questao', this.questao);
    this.letrasResposta = await this.forcaService.desmontarRespostaQuestao(this.questao.resposta);
    console.log('letrasResposta', this.letrasResposta);
    this.qtdDicasDisponiveis = this.forcaService.calcularQtdDicasDisponiveis(this.questao.resposta);
    this.changeRef.detectChanges(); // bug: forcar atualizacao da view
    this.loadingService.closeLoading();
  }

  verificarRespostaPossuiLetra(letraRespostaEscolhida: LetraResposta) {

    letraRespostaEscolhida.acertou = false;
    letraRespostaEscolhida.usada = true;
    letraRespostaEscolhida.classCss = 'letraUsadaErrada';

    let posLetra = this.questao.resposta.indexOf(letraRespostaEscolhida.letra);
    if (posLetra > -1) {
      letraRespostaEscolhida.classCss = 'letraUsadaCerta';
      letraRespostaEscolhida.acertou = true;
      while (posLetra > -1) {
        this.letrasResposta[posLetra].letra = letraRespostaEscolhida.letra;
        this.letrasResposta[posLetra].acertou = true;
        posLetra = this.questao.resposta.indexOf(letraRespostaEscolhida.letra, posLetra + 1);
      }
    } else {
      this.numeroErros++;
      this.urlImagemForca = `../../assets/imgs/forca-${this.numeroErros}.png`;
    }

    this.validarContinuaForca();
  }

  private validarContinuaForca() {
    if ( this.numeroErros > NUMERO_MAXIMO_TENTATIVAS_FORCA) {
      this.acertouResposta = false;
      this.finalizouForca = true;

      for (let i=0; i < this.letrasResposta.length; i++) {
        if (!this.letrasResposta[i].acertou) {
          this.letrasResposta[i].letra = this.questao.resposta[i];
          this.letrasResposta[i].classCss = 'letraNaoDescoberta';
        }
      }

      this.toastService.showError('Infelizmente você não possui mais tentativas!', 'Fim de Jogo!', 'middle');

      /*
      this.alertService.showConfirm('Fim de Jogo!', 'Infelizmente você não possui mais tentativas!',
                                    `<b>Resposta:</b> <span class='textRed'>${this.questao.resposta}</span>`,
                                    'Novo Jogo', () => this.inicializarForca());
      */
    } else {
      this.acertouResposta = true;

      for (const letraResposta of this.letrasResposta) {
        if (letraResposta.letra === '') {
          this.acertouResposta = false;
          break;
        }
      }

      if (this.acertouResposta) {
        this.finalizouForca = true;

        this.toastService.showSuccess('Parabéns! Você acertou!', 'Fim de Jogo!', 'middle');

        /*
        this.alertService.showConfirm('Fim de Jogo!', 'Parabéns!',
                                      `Você acertou!<br><b>Resposta:</b> <span class='textBlue'>${this.questao.resposta}</span>`,
                                      'Novo Jogo', () => this.inicializarForca());
        */
      }
    }
  }

  fornecerDicaLetraResposta() {
    this.qtdDicasDisponiveis--;

    let letraRandomJaAcertada: boolean = true;
    let posLetraRandom: number = Math.floor(Math.random() * (this.letrasResposta.length));

    while (letraRandomJaAcertada) {
      if ( (!this.letrasResposta[posLetraRandom].charEspecial) && (!this.letrasResposta[posLetraRandom].acertou) ) {
        letraRandomJaAcertada = false;
      } else {
        posLetraRandom = Math.floor(Math.random() * (this.letrasResposta.length));
      }
    }

    const ehMesmaLetra = (letraResposta: LetraResposta) => {
      return letraResposta.letra === this.questao.resposta[posLetraRandom] ;
    };

    for (let i = 0; i < this.opcoesLetrasResposta.length; i++) {
      const mesmaLetra = this.opcoesLetrasResposta[i].filter( ehMesmaLetra );
      if (mesmaLetra && mesmaLetra.length > 0) {
        this.verificarRespostaPossuiLetra(mesmaLetra[0]);
      }
    }
  }

  private resetarForca() {
    this.router.navigate(['/tabs/forca']);
  }

}
