import { FooterContainer, SocialLinks, Logo } from './styles'

import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import efood from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainer>
      <Link to={'/'}>
        <Logo src={efood} alt="Instagram" />
      </Link>
      <SocialLinks>
        <li>
          <Link to={'/'}>
            <img src={instagram} alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <img src={facebook} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <img src={twitter} alt="Twitter" />
          </Link>
        </li>
      </SocialLinks>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </FooterContainer>
  )
}

export default Footer
