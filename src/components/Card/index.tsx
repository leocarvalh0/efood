import { useState } from 'react'
import { CardContainer, Infos, InfosHeader, Avaliation, Tags } from './styles'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import Button from '../Button'
import fechar from '../../assets/images/fechar.png'
import { ModalContainer, ModalContent } from './styles'

export type Props = {
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

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Card = ({
  image,
  title,
  description,
  avaliation,
  type,
  destacado,
  tipo,
  id,
  preco
}: Props) => {
  const [modal, setModal] = useState(false)

  const estaDestacado = () => {
    if (destacado) {
      return <Tag>Destaque da semana</Tag>
    }
  }

  const closeModal = () => {
    setModal(false)
  }

  if (type === 'restaurant') {
    return (
      <CardContainer type="restaurant">
        <Tags>
          {estaDestacado()}
          {tipo && <Tag>{tipo}</Tag>}
        </Tags>
        <img src={image} alt="Hioki Sushi" />
        <Infos type="restaurant">
          <InfosHeader>
            <h3>{title}</h3>
            <Avaliation>
              <span>{avaliation}</span>
              <img src={estrela} alt="Estrela" />
            </Avaliation>
          </InfosHeader>
          <p>{description}</p>
          <Button type="link" to={`/restaurantes/${id}`}>
            Saiba mais
          </Button>
        </Infos>
      </CardContainer>
    )
  }

  console.log({ image, title, description, preco })
  return (
    <>
      <CardContainer type="product">
        <img src={image} alt="Hioki Sushi" />
        <Infos type="product">
          <InfosHeader>
            <h3>{title}</h3>
          </InfosHeader>
          <p>{description}</p>
          <Button type="button" onClick={() => setModal(true)}>
            Saiba mais
          </Button>
        </Infos>
      </CardContainer>
      <ModalContainer className={modal ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={image} alt="Pizza Marguerita" />
          <div>
            <header>
              <h4>{title}</h4>
              <img
                src={fechar}
                alt="Ícone de fechar"
                onClick={() => closeModal()}
              />
            </header>
            <p>{description}</p>
            <p>Serve: de 2 a 3 pessoas</p>
            <Button type="button">
              Adicionar ao carrinho - {formataPreco(preco)}
            </Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </ModalContainer>
    </>
  )
}

export default Card
