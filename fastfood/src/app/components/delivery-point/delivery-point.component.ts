import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {
  constructor(public pedidoService: PedidoService) {}

  onEntregarPedido(pedido: Pedido) {
    this.pedidoService.entregarPedido(pedido);
    alert(`El pedido se entrego correctamente`)
  }
}
