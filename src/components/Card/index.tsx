import { CardContainer, CardInfos, Button, Description, InfosHeader, Title, Avaliation, Tags, Container } from './styles'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../Modal'

export type Props = {
    title: string,
    description: string,
    image: string,
    avaliation?: number,
    infos?: string[],
    buttonValue: string
}

const Card = ({
    title,
    description,
    image,
    avaliation,
    infos,
    buttonValue
}: Props) => {
    const [ativo, setAtivo] = useState(false);

    return (
        <Container>
            <CardContainer>
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
                        <Button onClick={() => setAtivo(true)}>
                            {buttonValue}
                        </Button>
                    </Link>
                </CardInfos>
            </CardContainer>
            {ativo && (
                <>
                    <div className="overlay" onClick={() => setAtivo(false)} />
                    <Modal isVisible={ativo} closeModal={() => setAtivo(false)} />
                </>
            )}
        </Container>
    );
};

export default Card;