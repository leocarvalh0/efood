import Card from '../Card'
import { Product } from '../../models/Product'
import { Container } from './styles'

type Products = {
  products: Product[]
}

const ProductsList = ({ products }: Products) => {
  return (
    <Container>
      {products.map((product) => (
        <Card
          type="product"
          image={product.image}
          description={product.description}
          title={product.title}
          key={product.id}
        />
      ))}
    </Container>
  )
}

export default ProductsList
