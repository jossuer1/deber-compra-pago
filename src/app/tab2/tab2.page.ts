import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonInput, IonNote, IonCard, IonCardContent
} from '@ionic/angular';
import { CompraService } from '../compra.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  standalone: true,
  imports: [
    CurrencyPipe, ReactiveFormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonInput, IonNote, IonCard, IonCardContent
  ],
})
export class Tab2Page {
  subtotal = 0;
  form = this.fb.group({
    descuento: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    recibido: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder, public compra: CompraService) {}

  // Se ejecuta cada vez que se abre la pestaña
  ionViewWillEnter() { this.subtotal = this.compra.subtotal; }

  get descuentoMonto() {
    return this.subtotal * (Number(this.form.value.descuento) || 0) / 100;
  }
  get total() { return this.subtotal - this.descuentoMonto; }
  get diferencia() { return (Number(this.form.value.recibido) || 0) - this.total; }

  invalido(campo: string) {
    const c = this.form.get(campo)!;
    return c.invalid && c.touched;
  }
}