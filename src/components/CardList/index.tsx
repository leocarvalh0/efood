import Product from "../../models/Product";
import Card from "../Card";
import { List } from './styles'

export type Props = {
    products: Product[]
    tipo: string
}

const CardList = ({ products, tipo }: Props) => (
    <div className="container">
        <List tipo={tipo}>
            {products.map((product) => (
                <Card 
                    key={product.id}
                    title={product.title} 
                    description={product.description} 
                    image={product.image}
                    avaliation={product.avalition} 
                    infos={product.infos}
                    buttonValue={product.buttonValue}
                />
            ))}
        </List>     
    </div>
)

export default CardList