import { NativeDateModule } from "@angular/material/core";
import { BasketItem } from "./basket-item";

export interface Basket {
    id: string; 
    userId: string; 
    orderDate: Date; 
    transactionCompleted: boolean;
}

export interface CreateBasketDto {
    userId: string; 
}

export interface BasketUiState {
    id: String; 
    userId: string; 
    items: BasketItem[] | undefined; 
    orderDate: Date;
    transactionCompleted: boolean; 
}