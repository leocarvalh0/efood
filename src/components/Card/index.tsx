import { CardContainer, Infos, InfosHeader, Avaliation, Tags } from './styles'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import Button from '../Button'

export type Props = {
  image: string
  title: string
  description: string
  avaliation?: string
  type: 'product' | 'restaurant'
}

const Card = ({ image, title, description, avaliation, type }: Props) => {
  if (type === 'restaurant') {
    return (
      <CardContainer type="restaurant">
        <Tags>
          <Tag>Destaque da semana</Tag>
          <Tag>Japonesa</Tag>
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
          <Button type="link" to="/perfil">
            Saiba mais
          </Button>
        </Infos>
      </CardContainer>
    )
  }
  return (
    <CardContainer type="product">
      <img src={image} alt="Hioki Sushi" />
      <Infos type="product">
        <InfosHeader>
          <h3>{title}</h3>
        </InfosHeader>
        <p>{description}</p>
        <Button type="button">Adicionar ao carrinho</Button>
      </Infos>
    </CardContainer>
  )
}

export default Card
