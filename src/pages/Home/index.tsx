import { useEffect, useState } from 'react'

import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

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
