import { View } from "react-native"
import { useState } from "react"
import { Product } from "../../domain/product"

interface ProductFormProps {
  onCreateProduct: (product: Product) => void
}

export const ProductForm = ({ onCreateProduct }: ProductFormProps) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)

  const onSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const product: Product = {
      id: Date.now(),
      name: name,
      price: price
    }
    
    setName("")
    setPrice(0)
    
    onCreateProduct(product)
  }

  return (
    <View>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        <input
          placeholder="Price"
          value={price}
          onChange={(e)=>setPrice(Number(e.target.value))}
          />
        <button type="submit">Add Product</button>
      </form>
    </View>
  )
}