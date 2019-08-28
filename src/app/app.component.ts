import { DataBaseService } from './core/service/database.service';
import { AlertService } from './core/service/alert.service';
import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, IonRouterOutlet, ActionSheetController, PopoverController, ModalController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private alertService: AlertService,
    private dataBaseService: DataBaseService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.backButtonEvent();

      console.log('platform', this.platform.platforms());
      if (!this.platform.is('mobileweb') && !this.platform.is('desktop')) {
        await this.dataBaseService.openDatabase();
      } else {
        console.log('app rodando no browser =-/');
      }
    });
  }

  private backButtonEvent() {
    this.platform.backButton.subscribe(async () => {

        // close action sheet
        try {
            const element = await this.actionSheetCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
          console.log(error);
        }

        // close popover
        try {
            const element = await this.popoverCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
          console.log(error);
        }

        // close modal
        try {
            const element = await this.modalCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
            console.log(error);
        }

        // close alert
        try {
          const element = await this.alertCtrl.getTop();
          if (element) {
              this.alertCtrl.dismiss();
              return;
          }
        } catch (error) {
          console.log(error);
        }

        // close side menu
        /*
        try {
            const element = await this.menuCtrl.getOpen();
            if (element !== null) {
                this.menuCtrl.close();
                return;
            }
        } catch (error) {

        }
        */

        this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
            if (outlet && outlet.canGoBack()) {
              outlet.pop();

            } else if (this.router.url === '/tabs/forca') {
              const funcaoExitApp = () => { navigator['app'].exitApp(); };

              this.alertService.showConfirmAndCancel('Atenção', 'Deseja encerrar o aplicativo?', 'Não', 'Sim', () => funcaoExitApp());

            } else {
              this.router.navigate(['/tabs/forca']);
            }
        });
    });
  }
}
