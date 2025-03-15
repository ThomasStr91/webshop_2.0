export interface BasketItem {
    id: string; 
    productId: string; 
    price: number; 
    name: string; 
}

export interface createBasketItemDto {
    productId: string; 
    name: string; 
    price: number; 
}
