import Product from "../../models/Product"
import pizza from "../../assets/images/pizza.png"
import CardList from "../../components/CardList"
import Banner from "../../components/Banner"
import Header from "../../components/Header"

const produtosPerfil: Product[] = [
    {
        id: 1,
        title: 'Produto 1',
        description: 'teste 1',
        image: pizza
    },
    {
        id: 2,
        title: 'Produto 2',
        description: 'teste 2',
        image: pizza
    },
    {
        id: 3,
        title: 'Produto 3',
        description: 'teste 3',
        image: pizza
    },
    {
        id: 4,
        title: 'Produto 4',
        description: 'teste 4',
        image: pizza
    },
    {
        id: 5,
        title: 'Produto 5',
        description: 'teste 5',
        image: pizza
    },
    {
        id: 6,
        title: 'Produto 6',
        description: 'teste 6',
        image: pizza
    }
]

const Perfil = () => (
    <>
        <Header type="perfil" infos={['Restaurantes', '0 produto(s) no carrinho']} />
        <Banner />
        <CardList products={produtosPerfil} tipo="perfil" />
    </>
)

export default Perfil