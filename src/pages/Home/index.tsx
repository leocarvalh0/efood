import { useEffect, useState } from "react"
import RestaurantsList from "../../components/RestaurantsList"
import Header from "../../components/Header"

export type Restaurante = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: [
        {
            foto: string
            preco: number
            id: number
            nome: string
            descricao: string
            porcao: string
        }
    ]
}

const Home = () => {
    const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setRestaurantes(res))
    }, [])

    return (
        <>
            <Header type="home" infos={["Viva experiências gastronômicas no conforto da sua casa"]} />
            <RestaurantsList restaurantes={restaurantes} />
        </>
    )
}

export default Home