import { useState, useEffect, use } from "react";
import { Product } from "../../domain/product";
import { ProductRepositoryImpl } from "../../data/productRepositoryImpl";

const respository = new ProductRepositoryImpl()

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = () => {
    const products = respository.getProducts()
    setProducts(products)
  }

  const createProduct = (product: Product) => {
    respository.createProduct(product)
    setProducts((prev) => [...prev, product])
  }

  const updateProduct = (product: Product) => {
    respository.updateProduct(product)
    setProducts((prev) => prev.map((
      current => current.id === product.id ? product : current
    )))
  }

  const deleteProduct = (productId: number) => {
    respository.deleteProduct(productId)
    setProducts((prev) => prev.filter(
      current => current.id !== productId
    ))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return {
    products,
    createProduct,
    updateProduct,
    deleteProduct
  }
}