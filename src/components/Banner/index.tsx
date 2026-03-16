import { Restaurant } from '../../pages/Home'
import { BannerContainer, Title } from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <Title>{restaurant.tipo}</Title>
        <p>{restaurant.titulo}</p>
      </div>
    </BannerContainer>
  )
}

export default Banner
