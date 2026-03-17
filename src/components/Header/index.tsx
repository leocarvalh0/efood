import { HeaderContainer } from './styles'

import efood from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo-header.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/Reducers/cart'

export type Props = {
  type: 'home' | 'perfil'
}

const Header = ({ type }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (type === 'home') {
    return (
      <HeaderContainer type="home" style={{ backgroundImage: `url(${fundo})` }}>
        <Link to="/">
          <img src={efood} alt="Efood" />
        </Link>
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </HeaderContainer>
    )
  }

  return (
    <div style={{ backgroundImage: `url(${fundo})` }}>
      <HeaderContainer className="container" type="perfil">
        <Link to="/">Restaurantes</Link>
        <Link to="/">
          <img src={efood} alt="Efood" />
        </Link>
        <button onClick={openCart}>{items.length} produtos no carrinho</button>
      </HeaderContainer>
    </div>
  )
}

export default Header
