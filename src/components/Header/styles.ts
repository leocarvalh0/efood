import { styled } from "styled-components"
import { Props } from  './'

export const HeaderContainer = styled.div<Omit<Props, 'infos'>>`
    text-align: center;
    height: ${(props) => props.type === 'home' ? '384px' : '186px'};

    div {
        position: relative;
        top: -180px;
        display: flex;
        justify-content: space-between;
    }

    p {
        font-size: ${(props) => props.type === 'home' ? '36px' : '18px'};
        font-weight: bold;
    }
`

export const Logo = styled.img`
    margin: 64px 0 138px 0;
`