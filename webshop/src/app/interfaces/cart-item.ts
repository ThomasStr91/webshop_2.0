export interface CartItem {
    id: string; 
    productId: string; 
    price: number; 
    name: string; 
}

export interface createCartItemDto {
    productId: string; 
    name: string; 
    price: number; 
}
