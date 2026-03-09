import Card from '../Card'
import { Restaurant } from '../../models/Restaurant'
import { Container } from './styles'

type Restaurants = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Restaurants) => {
  return (
    <Container>
      {restaurants.map((restaurant) => (
        <Card
          type="restaurant"
          image={restaurant.image}
          description={restaurant.description}
          avaliation={restaurant.avaliation}
          title={restaurant.title}
          key={restaurant.id}
        />
      ))}
    </Container>
  )
}

export default RestaurantsList
