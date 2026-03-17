import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'
import { useParams } from 'react-router-dom'
import { useGetRestauranteQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestauranteQuery(id!)

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
