import { View, Text, Button } from "react-native"
import { useProducts } from "./hooks/useProducts"
import { ProductForm } from "./components/ProductForm"

export const ProductPage = () => {
  const { products, createProduct, updateProduct, deleteProduct } = useProducts()

  return (
    <View>
      <ProductForm onCreateProduct={createProduct}/>
      <Text>Product Page</Text>
      {products.map(product => (
        <View key={product.id}>
          <Text>Name: {product.name}</Text>
          <Text>Price: {product.price}</Text>
          <Button
            title="Delete"
            onPress={() => deleteProduct(product.id)}
          />
        </View>
      ))}
    </View>
  )
}