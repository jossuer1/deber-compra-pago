import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonNote } from '@ionic/angular';
import { CompraService } from '../compra.service';

function enteroPositivo(c: AbstractControl): ValidationErrors | null {
  const v = Number(c.value);
  return Number.isInteger(v) && v > 0 ? null : { entero: true };
}
function mayorQueCero(c: AbstractControl): ValidationErrors | null {
  return Number(c.value) > 0 ? null : { positivo: true };
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  standalone: true,
  imports: [ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonNote],
})
export class Tab1Page {
  form = this.fb.group({
    producto: ['', [Validators.required, Validators.pattern(/.*\S.*/)]],
    cantidad: [null as number | null, [Validators.required, enteroPositivo]],
    precio: [null as number | null, [Validators.required, mayorQueCero]],
  });

  constructor(private fb: FormBuilder, private router: Router, private compra: CompraService) {}

  enviar() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const v = this.form.value;
    this.compra.producto = v.producto!.trim();
    this.compra.cantidad = Number(v.cantidad);
    this.compra.precio = Number(v.precio);
    this.router.navigate(['/tabs/tab2']);
  }

  invalido(campo: string) {
    const c = this.form.get(campo)!;
    return c.invalid && c.touched;
  }
}