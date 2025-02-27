import Product from "../../models/Product";
import { Container } from "../../styles";
import Card from "../Card";
import { List } from './styles'

export type Props = {
    products: Product[]
    tipo: string
}

const CardList = ({ products, tipo }: Props) => (
    <Container>
        <List tipo={tipo}>
            {products.map((product) => (
                <Card 
                    key={product.id}
                    title={product.title} 
                    description={product.description} 
                    image={product.image}
                    avaliation={product.avalition} 
                    infos={product.infos}
                />
            ))}
        </List>     
    </Container>
)

export default CardList