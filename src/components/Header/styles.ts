import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

import { Props } from '.'

export const HeaderContainer = styled.header<Props>`
  width: 100%;
  display: ${({ type }) => (type === 'home' ? '' : 'flex')};
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: ${({ type }) => (type === 'home' ? '' : 'space-between')};
  align-items: ${({ type }) => (type === 'home' ? '' : 'center')};
  height: ${({ type }) => (type === 'home' ? '384px' : '186px')};
  text-align: center;
  padding: 40px 0;
  color: ${cores.vermelhoClaro};
  font-weight: bold;
  font-size: 18px;

  a {
    color: ${cores.vermelhoClaro};
  }

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

  button {
    cursor: pointer;
    color: ${cores.vermelhoClaro};
    background-color: transparent;
    font-weight: bold;
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    justify-content: space-between;
    height: ${({ type }) => (type === 'home' ? '284px' : '186px')};

    h1 {
      width: 90%;
      font-size: 24px;
    }

    img {
      margin-top: ${({ type }) => (type === 'home' ? '0' : '8px')};
      margin-bottom: ${({ type }) => (type === 'home' ? '40px' : '0')};
    }
  }
`
