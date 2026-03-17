import Card from '../Card'
import { Container } from './styles'

type Product = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  restaurants: Product[]
}

const ProductsList = ({ restaurants }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  return (
    <Container>
      {restaurants.map((product) => (
        <Card
          key={product.id}
          restaurant={{
            id: product.id,
            title: product.nome,
            description: getDescricao(product.descricao),
            image: product.foto,
            preco: product.preco,
            type: 'product'
          }}
        />
      ))}
    </Container>
  )
}

export default ProductsList
