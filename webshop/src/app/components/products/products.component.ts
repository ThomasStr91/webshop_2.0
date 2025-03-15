import { Component, Input, OnInit } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { BasketService } from '../../services/basket.service';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-products',
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    ProductComponent
],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  
  products: Product[] = []; 

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products
    })
    
  }

  addToCart(){

  }
}
