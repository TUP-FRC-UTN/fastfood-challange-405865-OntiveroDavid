import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  constructor(public pedidoService: PedidoService) {}

  onTomarPedido(pedido: Pedido) {
    this.pedidoService.tomarParaCocinar(pedido);
  }

  onTerminarCoccion(pedido: Pedido) {
    this.pedidoService.terminarCoccion(pedido);
  }
}
