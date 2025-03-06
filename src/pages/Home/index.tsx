import CardList from "../../components/CardList"
import Product from "../../models/Product"
import macarrao from "../../assets/images/macarrao.png"
import sushi from "../../assets/images/sushi.png"
import Header from "../../components/Header"

const produtosHome: Product[] = [
    {
        id: 1,
        title: 'Hioki Sushi ',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        image: sushi,
        avalition: 4.9,
        infos: ['Destaque da semana', 'Japonês'],
        buttonValue: 'Saiba mais'
        },
        {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: macarrao,
        avalition: 4.6,
        infos: ['Italiano'],
        buttonValue: 'Saiba mais'
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: macarrao,
        avalition: 4.6,
        infos: ['Italiano'],
        buttonValue: 'Saiba mais'
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: macarrao,
        avalition: 4.6,
        infos: ['Italiano'],
        buttonValue: 'Saiba mais'
    },
    {
        id: 5,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: macarrao,
        avalition: 4.6,
        infos: ['Italiano'],
        buttonValue: 'Saiba mais'
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: macarrao,
        avalition: 4.6,
        infos: ['Italiano'],
        buttonValue: 'Saiba mais'
    }
]

const Home = () => (
    <>
        <Header type="home" infos={["Viva experiências gastronômicas no conforto da sua casa"]} />
        <CardList products={produtosHome} tipo="home" />
    </>
)

export default Home