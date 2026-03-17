import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'
import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantesQuery()

  if (restaurants) {
    return (
      <>
        <Header type="home" />
        <div className="container">
          <RestaurantsList restaurants={restaurants} />
        </div>
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
