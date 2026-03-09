import Header from '../../components/Header'

import pizza from '../../assets/images/pizza.png'
import { Product } from '../../models/Product'
import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'

const products: Product[] = [
  {
    id: 1,
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => {
  return (
    <>
      <Header type="perfil" />
      <Banner />
      <div className="container">
        <ProductsList products={products} />
      </div>
    </>
  )
}

export default Perfil
