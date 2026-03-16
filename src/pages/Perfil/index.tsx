import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'
import { Restaurant } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header type="perfil" />
      <Banner restaurant={restaurant} />
      <div className="container">
        <ProductsList restaurants={restaurant?.cardapio || []} />
      </div>
    </>
  )
}

export default Perfil
