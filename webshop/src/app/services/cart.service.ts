import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../interfaces/product';
import { CartItem, createCartItemDto } from '../interfaces/cart-item';
import { CartUiState } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private static CART_URL = "http://localhost:3000/products";


  private cart = signal<CartUiState>({
    id: "",
    userId: "",
    items: [],
    orderDate: undefined,
    transactionCompleted: false
  })

  get basket(): Signal<CartUiState> {
    return this.cart;
  }


  constructor(
    private httpClient: HttpClient
  ) { }


  createCartItem(product: Product): Observable<CartItem>{
    const cartItem: createCartItemDto = {
      productId: product.id,
      name: product.name,
      price: product.price
    }

    const cartId: string = this.cart().id;

    return this.httpClient.post<CartItem>(`${CartService.CART_URL}/${cartId}/cart-items`, cartItem)
    .pipe(tap((item: CartItem) => {
      this.cart.set({
        ...this.cart(), 
        items: [...this.cart().items ?? [], item]
      })
    }
    ))
  }
}




