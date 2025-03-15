import { productDatabase } from "../models/products";
import { Request, Response } from "express";
import { ProductDto } from "src/dtos/product/productDto";
import { Product } from "src/types/Product";

export const getAllProducts = async(req: Request, res: Response): Promise<void> => {
  try {

    const products: Product[] = productDatabase;

    if (products.length === 0) {
      res.status(404).json({ message: "Keine Produkte gefunden" });
      return;
    }

    const productDto: ProductDto[] = products.map((product: Product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      avatar: product.avatar,
    }));
    res.status(200).json(productDto)

  } catch(error) {
    console.log("Produkte konnten nicht geladen werden");
    res.status(500).json({message: "Internal Server Error"})
  }
}