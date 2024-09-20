import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  pedidosPendientes: Pedido[] = [];
  pedidosEnCoccion: Pedido[] = [];
  pedidosListos: Pedido[] = [];
  hayPedidoEnCoccion: boolean = false;
  agregarPedido(pedido: Pedido) {
    this.pedidosPendientes.push(pedido);
  }

  tomarParaCocinar(pedido: Pedido) {
    this.pedidosPendientes = this.pedidosPendientes.filter(p => p !== pedido);
    this.pedidosEnCoccion.push(pedido);
    this.hayPedidoEnCoccion = true;
  }

  terminarCoccion(pedido: Pedido) {
    this.pedidosEnCoccion = this.pedidosEnCoccion.filter(p => p !== pedido);
    this.pedidosListos.push(pedido);
    this.hayPedidoEnCoccion = false;
  }

  entregarPedido(pedido: Pedido) {
    this.pedidosListos = this.pedidosListos.filter(p => p !== pedido);
  }
}
