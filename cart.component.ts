import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: ServiceService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = []; // Update the UI after clearing
  }
}
