import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  durationToast: number = 2000;

  constructor( private toastCtrl: ToastController ) {

  }

  showSuccess(message: string, header: string = 'Sucesso', position?: string) {
    if ( (position) && (position === 'middle') ) {
      this.showToastMiddle(message, 'success', header);
    } else  {
      this.showToastBottom(message, 'success', header);
    }
  }

  showError(message: string, header: string = 'Erro', position?: string) {
    if ( (position) && (position === 'middle') ) {
      this.showToastMiddle(message, 'danger', header);
    } else  {
      this.showToastBottom(message, 'danger', header);
    }
  }

  private async showToastBottom(messageParam: string, colorParam: string, headerParam: string) {
    const toast = await this.toastCtrl.create({
      header: headerParam,
      message: messageParam,
      color: colorParam,
      position: 'bottom',
      duration: this.durationToast
    });
    toast.present();
  }

  private async showToastMiddle(messageParam: string, colorParam: string, headerParam: string) {
    const toast = await this.toastCtrl.create({
      header: headerParam,
      message: messageParam,
      color: colorParam,
      position: 'middle',
      duration: this.durationToast
    });
    toast.present();
  }

}
