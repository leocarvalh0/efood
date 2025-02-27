import Product from "../../models/Product"
import pizza from "../../assets/images/pizza.png"
import CardList from "../../components/CardList"
import Banner from "../../components/Banner"
import Header from "../../components/Header"

const produtosPerfil: Product[] = [
    {
        id: 1,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza
    },
    {
        id: 2,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza
    },
    {
        id: 3,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza
    },
    {
        id: 4,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza
    },
    {
        id: 5,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza
    },
    {
        id: 6,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
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