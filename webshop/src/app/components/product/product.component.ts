import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    CommonModule, 
    FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
@Input() childProduct: Product | undefined

addToCart(){

}
}
