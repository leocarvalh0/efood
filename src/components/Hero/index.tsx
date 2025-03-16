import { Restaurante } from "../../pages/Home"
import { HeroContainer, Texto } from "./styles"

type Props = {
    restaurante: Restaurante
}

const Hero = ({ restaurante }: Props) => {
    return (
        <HeroContainer style={{ backgroundImage: `url(${restaurante.capa})` }}>
            <div className="container">
                <Texto>{restaurante.tipo}</Texto>
                <p>{restaurante.titulo}</p>
            </div>
        </HeroContainer>
    )
}

export default Hero