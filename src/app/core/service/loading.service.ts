import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;

  constructor( private loadingCtrl: LoadingController ) {

  }

  async showLoading(messageParam?: string) {
    this.isLoading = true;
    const loading = await this.loadingCtrl.create({
      message: (messageParam) ? messageParam : 'Aguarde...'
    });
    await loading.present();

    //const { role, data } = await loading.onDidDismiss();
  }

  async closeLoading() {
    if (this.isLoading && this.loadingCtrl) {
      await this.loadingCtrl.dismiss();
    }
    this.isLoading = false;
  }

}
