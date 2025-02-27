import { styled } from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
    padding: 40px 0px;
    background-color: ${cores.bege};
    text-align: center;

    p {
        margin-top: 80px;
        font-size: 10px;
        line-height: 12px;
    }
`

export const SocialLinks = styled.div`
    display: flex;
    max-width: 100px;
    margin: 88px auto;

    img {
        margin-right: 8px; 
    }
` 