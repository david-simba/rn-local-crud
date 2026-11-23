import { Product } from "./product"

export interface ProductRepository {
  getProducts(): Product[]
  createProduct(product: Product): void
  updateProduct(product: Product): void
  deleteProduct(productId: number): void
}