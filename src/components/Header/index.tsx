import { HeaderContainer } from './styles'

import efood from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo-header.png'
import { Link } from 'react-router-dom'

export type Props = {
  type: 'home' | 'perfil'
}

const Header = ({ type }: Props) => {
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
        <p>Restaurantes</p>
        <Link to="/">
          <img src={efood} alt="Efood" />
        </Link>
        <p>0 produtos no carrinho</p>
      </HeaderContainer>
    </div>
  )
}

export default Header
