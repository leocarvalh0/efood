import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const HeaderContainer = styled.header<Props>`
  display: ${({ type }) => (type === 'home' ? '' : 'flex')};
  background-repeat: no-repeat;
  background-size: size;
  justify-content: ${({ type }) => (type === 'home' ? '' : 'space-between')};
  align-items: ${({ type }) => (type === 'home' ? '' : 'center')};
  height: ${({ type }) => (type === 'home' ? '384px' : '186px')};
  text-align: center;
  padding: 40px 0;
  color: ${cores.vermelhoClaro};
  font-weight: bold;
  font-size: 18px;

  img {
    width: 125px;
    height: 58px;
    margin-bottom: ${({ type }) => (type === 'home' ? '140px' : '0')};
  }

  h1 {
    width: 539px;
    margin: 0 auto;
    font-size: 36px;
  }
`
