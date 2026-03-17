import { Restaurant } from '../../pages/Home'
import Card from '../Card'
import { Container } from './styles'

type Restaurants = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Restaurants) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 243) {
      return descricao.slice(0, 240) + '...'
    }
    return descricao
  }

  return (
    <Container>
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant.id}
          restaurant={{
            id: restaurant.id,
            title: restaurant.titulo,
            description: getDescricao(restaurant.descricao),
            image: restaurant.capa,
            avaliation: restaurant.avaliacao,
            destacado: restaurant.destacado,
            tipo: restaurant.tipo,
            type: 'restaurant'
          }}
        />
      ))}
    </Container>
  )
}

export default RestaurantsList
