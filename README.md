import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    
    constructor() {}
  
    addToCart(product: any) {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart)); // Store updated cart in localStorage
    }
  
    getCartItems() {
      return JSON.parse(localStorage.getItem('cart') || '[]'); // Retrieve cart items from localStorage
    }
  
    clearCart() {
      localStorage.removeItem('cart'); // Clear cart from localStorage
    }
  }

  #Product
  addToCart(product: any) {
  this.cartService.addToCart(product);
    alert('Item added to cart!');
  }

  #cart
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

<p>cart works!</p>
<div class="container">
    <h2>Cart</h2>
    <mat-card *ngFor="let item of cartItems" class="product-card">
      <mat-card-header>
        <mat-card-title>{{ item.title }}</mat-card-title>
        <mat-card-subtitle>{{ item.category }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="item.images[0]" alt="{{ item.title }}">
      <mat-card-content>
        <p>{{ item.description }}</p>
        <p><strong>Stock:</strong> {{ item.stock }}</p>
      </mat-card-content>
    </mat-card>
    <button mat-raised-button color="warn" (click)="clearCart()">Clear Cart</button>
  </div>
