import { getAllProducts } from "../controller/product.controller";
import { Router } from "express";

const router: Router = Router(); 

router.get("/", getAllProducts)

export default router