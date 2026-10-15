import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IonContent, IonButton],
  template: `
    <ion-content class="ion-padding">
      <div class="inicio">
        <img src="assets/inicio.png" alt="Compra y Pago" />
        <h1>Compra y Pago</h1>
        <p>Registra tu compra y calcula el pago</p>
        <ion-button (click)="entrar()">Comenzar</ion-button>
      </div>
    </ion-content>
  `,
  styles: [`
    .inicio {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    img { width: 60%; max-width: 280px; margin-bottom: 24px; }
  `],
})
export class InicioPage {
  constructor(private router: Router) {}

  entrar() {
    this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
  }
}