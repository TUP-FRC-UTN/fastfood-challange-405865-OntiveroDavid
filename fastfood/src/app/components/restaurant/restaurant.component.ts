import { Component } from '@angular/core';
import { PosComponent } from "../pos/pos.component";
import { KitchenComponent } from '../kitchen/kitchen.component';
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PosComponent, KitchenComponent, DeliveryPointComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

}
