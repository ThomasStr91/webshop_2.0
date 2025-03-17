import { Injectable, Signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartItem, createCartItemDto } from '../interfaces/cart-item';
import { CartUiState } from '../interfaces/cart';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productCache: Product[] | undefined = undefined;

  private static PRODUCTS_URL = "http://localhost:3000/products" 

  get cart(): Signal<CartUiState> {
    return this.cart;

}

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(ProductService.PRODUCTS_URL)
    .pipe(
      tap((products: Product[]) => {
      this.productCache = products
    }))
  };
}