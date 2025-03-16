import { Restaurante } from "../../pages/Home";
import Card from "../Card";
import { List } from './styles'

export type Props = {
    restaurantes: Restaurante[]
}

const RestaurantsList = ({ restaurantes }: Props) => (
    <div className="container">
        <List>
            {restaurantes.map((restaurante) => (
                <Card 
                    id={restaurante.id}
                    key={restaurante.id}
                    title={restaurante.titulo} 
                    description={restaurante.descricao} 
                    image={restaurante.capa}
                    avaliation={restaurante.avaliacao} 
                    type={restaurante.tipo}
                    display="home"
                    destacado={restaurante.destacado}
                />
            ))}
        </List>     
    </div>
)

export default RestaurantsList