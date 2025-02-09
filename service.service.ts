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
  
