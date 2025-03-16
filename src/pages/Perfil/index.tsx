import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Restaurante } from "../../pages/Home"
import Hero from "../../components/Hero"
import Header from "../../components/Header"
import Cardapio from "../../components/Cardapio"

const Perfil = () => {
    const { id } = useParams()
    const [restaurante, setRestaurante] = useState<Restaurante>()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => setRestaurante(res))
    }, [])

    return (
        <>
            <Header type="perfil" infos={['Restaurantes', '0 produto(s) no carrinho']} />
            {restaurante && (
                <>
                    <Hero restaurante={restaurante}/>
                    <Cardapio restaurante={restaurante} />
                </>
            )}
        </>
    )
}

export default Perfil