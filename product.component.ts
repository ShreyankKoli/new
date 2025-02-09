import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient, private cartService: ServiceService) {}

  ngOnInit() {
    const storedProducts = localStorage.getItem('products');

    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    } else {
      this.http.get<any>(this.apiUrl).subscribe(response => {
        if (response && response.products) {
          this.products = response.products.map((product: any) => ({
            title: product.title,
            images: product.images || [],
            description: product.description,
            category: product.category,
            stock: product.stock
          }));

          localStorage.setItem('products', JSON.stringify(this.products));
        }
      }, error => {
        console.error('Error fetching products:', error);
      });
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Item added to cart!');
  }
}