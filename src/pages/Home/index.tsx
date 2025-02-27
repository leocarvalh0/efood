import CardList from "../../components/CardList"
import Product from "../../models/Product"
import macarrao from "../../assets/images/macarrao.png"
import sushi from "../../assets/images/sushi.png"
import Header from "../../components/Header"

const produtosHome: Product[] = [
    {
        id: 1,
        title: 'Produto 1',
        description: 'teste 1',
        image: sushi,
        avalition: 4.9,
        infos: ['Destaque da semana', 'Japonês']
    },
    {
        id: 2,
        title: 'Produto 2',
        description: 'teste 2',
        image: macarrao,
        avalition: 4.6,
        infos: ['Italiano']
    },
    {
        id: 3,
        title: 'Produto 3',
        description: 'teste 3',
        image: macarrao,
        avalition: 4.6,
        infos: ['Italiano']
    },
    {
        id: 4,
        title: 'Produto 4',
        description: 'teste 4',
        image: macarrao,
        avalition: 4.6,
        infos: ['Italiano']
    },
    {
        id: 5,
        title: 'Produto 5',
        description: 'teste 5',
        image: macarrao,
        avalition: 4.6,
        infos: ['Italiano']
    },
    {
        id: 6,
        title: 'Produto 6',
        description: 'teste 6',
        image: macarrao,
        avalition: 4.6,
        infos: ['Italiano']
    }
]

const Home = () => (
    <>
        <Header type="home" infos={["Viva experiências gastronômicas no conforto da sua casa"]} />
        <CardList products={produtosHome} tipo="home" />
    </>
)

export default Home