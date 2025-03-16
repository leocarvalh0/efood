import { Restaurante } from "../../pages/Home"
import Card from "../Card"
import { CardapioContainer } from "./styles"

type Props = {
    restaurante: Restaurante
}

const Cardapio = ({ restaurante }: Props) => {    
    return (
        <div className="container">
            <CardapioContainer>
                {restaurante?.cardapio.map((produto) => (
                    <Card 
                        description={produto.descricao}
                        id={produto.id}
                        image={produto.foto}
                        title={produto.nome}
                        key={produto.id}
                        type=""
                        display="perfil"
                        porcao={produto.porcao}
                    />
                ))}
            </CardapioContainer>
        </div>
    )
}

export default Cardapio