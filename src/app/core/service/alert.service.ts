import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor( private alertCtrl: AlertController ) {

  }

  async showConfirmAndCancel( textHeader: string = 'Atenção', textMessage: string,
                              textButtonCancel: string = 'Não', textButtonConfirm: string = 'Sim',
                              actionConfirm: () => void) {

    const alert = await this.alertCtrl.create({
      header: textHeader,
      message: textMessage,
      backdropDismiss: false,
      cssClass: 'alertConfirmAndCancel',
      buttons: [
        {
          text: textButtonCancel,
          cssClass: 'btCancel',
          role: 'cancel'
        },
        {
          text: textButtonConfirm,
          cssClass: 'btConfirm',
          handler: () => {
            actionConfirm();
          }
        }
      ]
    });
    await alert.present();
  }

  async showConfirm( textHeader: string = 'Sucesso', textSubHeader: string = '',
                     textMessage: string, textButtonConfirm: string = 'Sim',
                     actionConfirm: () => void) {

    const alert = await this.alertCtrl.create({
      header: textHeader,
      subHeader: textSubHeader,
      message: textMessage,
      backdropDismiss: false,
      cssClass: 'alertConfirm',
      buttons: [
        {
          text: textButtonConfirm,
          cssClass: 'btConfirm',
          handler: async () => {
            actionConfirm();
          }
        }
      ]
    });
    await alert.present();
  }

}
