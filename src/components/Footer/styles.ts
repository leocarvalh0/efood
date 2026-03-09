import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  margin-top: 120px;

  p {
    color: ${cores.vermelhoClaro};
    font-size: 10px;
    max-width: 480px;
    text-align: center;
  }
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 32px;
`

export const SocialLinks = styled.ul`
  display: flex;
  margin: 0 auto;
  margin-bottom: 80px;

  img {
    width: 24px;
    margin-right: 8px;
  }
`
