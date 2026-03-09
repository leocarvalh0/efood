import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'
import { Restaurant } from '../../models/Restaurant'
import sushi from '../../assets/images/sushi.png'

const restaurants: Restaurant[] = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliation: '4,9'
  },
  {
    id: 2,
    image: sushi,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliation: '4,9'
  },
  {
    id: 3,
    image: sushi,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliation: '4,9'
  },
  {
    id: 4,
    image: sushi,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliation: '4,9'
  },
  {
    id: 5,
    image: sushi,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliation: '4,9'
  },
  {
    id: 6,
    image: sushi,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliation: '4,9'
  }
]

const Home = () => {
  return (
    <>
      <Header type="home" />
      <div className="container">
        <RestaurantsList restaurants={restaurants} />
      </div>
    </>
  )
}

export default Home
