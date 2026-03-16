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
          type="restaurant"
          image={restaurant.capa}
          description={getDescricao(restaurant.descricao)}
          avaliation={restaurant.avaliacao}
          title={restaurant.titulo}
          key={restaurant.id}
          destacado={restaurant.destacado}
          tipo={restaurant.tipo}
          id={restaurant.id}
        />
      ))}
    </Container>
  )
}

export default RestaurantsList
