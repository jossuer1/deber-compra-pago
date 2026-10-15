import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CompraService {
  producto = '';
  cantidad = 0;
  precio = 0;

  get subtotal(): number {
    return this.cantidad * this.precio;
  }
}