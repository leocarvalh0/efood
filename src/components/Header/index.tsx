import { HeaderContainer, Logo } from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { Container } from '../../styles'
import { Link } from 'react-router-dom'

export type Props = {
    infos: string[]
    type: 'home' | 'perfil'
}

const Header = ({ infos, type }: Props) => (
    <HeaderContainer type={type} style={{ backgroundImage: `url(${fundo})` }}>
        <Link to="/">
            <Logo src={logo} alt="Efood" />
        </Link>
        {type === "home" ? (
            <p style={{ width: '539px', margin: '0 auto' }} >{infos}</p>
        ) : (
            <Container>
                {infos.map((info) => (
                    <p>{info}</p>
                ))}
            </Container>
        )}
    </HeaderContainer>
)

export default Header