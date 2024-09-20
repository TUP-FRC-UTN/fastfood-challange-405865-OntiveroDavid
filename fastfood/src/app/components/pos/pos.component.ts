import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  nombreCliente: string = '';
  descripcionPedido: string = '';

  constructor(private pedidoService: PedidoService) {}

  onAgregarPedido() {
    const nuevoPedido: Pedido = {
      number: Math.floor(Math.random() * 1000) + 1,
      name: this.nombreCliente,
      description: this.descripcionPedido,
      date: new Date()
    };

    this.pedidoService.agregarPedido(nuevoPedido);
    
    this.nombreCliente = '';
    this.descripcionPedido = '';
  }
}