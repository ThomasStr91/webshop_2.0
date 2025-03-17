import { Component, Input, OnInit } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { MatSnackBar} from '@angular/material/snack-bar';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    ProductComponent,   
],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit{

  
  products: Product[] = []; 

  constructor(private productService: ProductService, 
    private cartService: CartService,
    private snackBar: MatSnackBar){
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products
    })
    
  }

  addToCart(product: Product): void{
    this.cartService.createCartItem(product).subscribe()
    this.snackBar.open(`${product.name} wurde hinzugefügt`, `ok`, {
      duration: 3000
    })

  }
}
