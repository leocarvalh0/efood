import { FooterContainer, SocialLinks } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
    <FooterContainer>
        <img src={logo} alt="Efood" />
        <SocialLinks>
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
        </SocialLinks>
        <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
        </p>
    </FooterContainer>
)

export default Footer