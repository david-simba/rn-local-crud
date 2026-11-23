import { Product } from "../domain/product"
import { ProductRepository } from "../domain/productRepository"

export class ProductRepositoryImpl implements ProductRepository {
  products: Product[] = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 }
  ]

  getProducts(): Product[] {
    return this.products
  }

  createProduct(product: Product): void {
    this.products.push(product)
  }

  updateProduct(product: Product): void {
    this.products = this.products.map(current => 
      current.id === product.id ? product : current
    )
  }
  
  deleteProduct(productId: number): void {
    this.products = this.products.filter(currente => 
      currente.id !== productId
    )
  }
}