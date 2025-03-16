import { useState } from 'react'
import { CardContainer, CardInfos, Description, InfosHeader, Title, Avaliation, Tags, Container, ModalContainer, ModalContent, ModalInfos } from './styles'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Link } from 'react-router-dom'
import Button from '../Button'
import close from '../../assets/images/close.png'

export type Props = {
    image: string,
    title: string,
    description: string,
    avaliation?: number,
    type: string,
    id: number,
    display: "home" | "perfil",
    porcao?: string,
    destacado?: boolean
}

const Card = ({
    title,
    description,
    image,
    avaliation,
    type,
    id,
    display,
    porcao,
    destacado
}: Props) => {
    const [modal, setModal] = useState(false)

    const getDescricao = (descricao: string) => {
        if (display === "home") {
            if (descricao.length > 250) {
                return descricao.slice(0, 247) + '...'
            }
            return descricao
        } else if (display === "perfil") {
            if (descricao.length > 150) {
                return descricao.slice(0, 147) + '...'
            }
        }
    }

    return (
        <Container>
            <CardContainer display={display}>
                <img src={image} alt={title} />
                {type && (
                    <Tags>
                        {destacado && (
                            <Tag children='Destaque da semana' />
                        )}
                        <Tag children={type} />
                    </Tags>
                )}
                <CardInfos display={display}>
                    <InfosHeader>
                        <Title>{title}</Title>
                        {avaliation && (
                            <Avaliation>
                                {avaliation}
                                <img src={estrela} alt="Estrela" />
                            </Avaliation>
                        )}
                    </InfosHeader>
                    <Description display={display}>{getDescricao(description)}</Description>
                    <Link to="/perfil" onClick={() => setModal(true)}>
                        <Button
                            to={`/perfil/${id}`}>
                            Saiba mais
                        </Button>
                    </Link>
                </CardInfos>
            </CardContainer>
            <ModalContainer onClick={() => setModal(false)} className={modal ? 'visivel' : ''} >
                <ModalContent>
                    <img src={image} alt="Pizaa Marguerita" />
                    <ModalInfos>
                        <h3>{title}</h3>
                        <p>
                            {description} 
                            <br/> <br/>
                            Serve de {porcao}
                        </p>
                        <button>Adicionar ao carrinho - R$ 60,90</button>
                        <img onClick={() => setModal(false)} src={close} alt="Fechar modal" />
                    </ModalInfos>
                </ModalContent>
            </ModalContainer>
        </Container>
    );
};

export default Card;