import { NativeDateModule } from "@angular/material/core";
import { CartItem } from "./cart-item";

export interface Cart {
    id: string; 
    userId: string; 
    orderDate: Date; 
    transactionCompleted: boolean;
}

export interface CreateCartDto {
    userId: string; 
}

export interface CartUiState {
    id: string; 
    userId: string; 
    items: CartItem[] | undefined; 
    orderDate: Date | undefined;
    transactionCompleted: boolean; 
}