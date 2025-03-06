import { CardContainer, CardInfos, Button, Description, InfosHeader, Title, Avaliation, Tags } from './styles'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Link } from 'react-router-dom'

export type Props = {
    title: string,
    description: string,
    image: string,
    avaliation?: number
    infos?: string[]
}

const Card = ({
    title,
    description,
    image,
    avaliation,
    infos
}: Props) => (
    <CardContainer >
        <img src={image} alt={title} />
        <Tags>
            {infos?.map((info) => (
                <Tag key={info} children={info} />
            ))}
        </Tags>
        <CardInfos>
            <InfosHeader>
                <Title>{title}</Title>
                <Avaliation>
                    {avaliation}
                    <img src={estrela} alt="Estrela" />
                </Avaliation>
            </InfosHeader>
            <Description>{description}</Description>
            <Link to="/perfil">
                <Button>Saiba mais</Button>
            </Link>
        </CardInfos>
    </CardContainer>
)

export default Card