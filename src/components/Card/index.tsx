import { useState } from 'react'
import { CardContainer, Infos, InfosHeader, Avaliation, Tags } from './styles'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import Button from '../Button'
import fechar from '../../assets/images/fechar.png'
import { ModalContainer, ModalContent } from './styles'
import { useDispatch } from 'react-redux'
import { open, add } from '../../store/Reducers/cart'

export type Card = {
  title: string
  destacado?: boolean
  tipo?: string
  avaliation?: number
  description: string
  image: string
  type: 'product' | 'restaurant'
  id: number
  preco?: number
}

export type Props = {
  restaurant: Card
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Card = ({ restaurant }: Props) => {
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()

  const estaDestacado = () => {
    if (restaurant.destacado) {
      return <Tag>Destaque da semana</Tag>
    }
  }

  const closeModal = () => {
    setModal(false)
  }

  const addToCart = () => {
    dispatch(open())
    dispatch(add(restaurant))
    closeModal()
  }

  if (restaurant.type === 'restaurant') {
    return (
      <CardContainer type="restaurant">
        <Tags>
          {estaDestacado()}
          {restaurant.tipo && <Tag>{restaurant.tipo}</Tag>}
        </Tags>
        <img src={restaurant.image} alt="Hioki Sushi" />
        <Infos type="restaurant">
          <InfosHeader>
            <h3>{restaurant.title}</h3>
            <Avaliation>
              <span>{restaurant.avaliation}</span>
              <img src={estrela} alt="Estrela" />
            </Avaliation>
          </InfosHeader>
          <p>{restaurant.description}</p>
          <Button type="link" to={`/restaurantes/${restaurant.id}`}>
            Saiba mais
          </Button>
        </Infos>
      </CardContainer>
    )
  }

  return (
    <>
      <CardContainer type="product">
        <img src={restaurant.image} alt="Hioki Sushi" />
        <Infos type="product">
          <InfosHeader>
            <h3>{restaurant.title}</h3>
          </InfosHeader>
          <p>{restaurant.description}</p>
          <Button type="button" onClick={() => setModal(true)}>
            Saiba mais
          </Button>
        </Infos>
      </CardContainer>
      <ModalContainer className={modal ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={restaurant.image} alt="Pizza Marguerita" />
          <div>
            <header>
              <h4>{restaurant.title}</h4>
              <img
                src={fechar}
                alt="Ícone de fechar"
                onClick={() => closeModal()}
              />
            </header>
            <p>{restaurant.description}</p>
            <p>Serve: de 2 a 3 pessoas</p>
            <Button type="button" onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(restaurant.preco)}
            </Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </ModalContainer>
    </>
  )
}

export default Card
