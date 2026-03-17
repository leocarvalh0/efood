import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.vermelhoClaro};
  z-index: 1;
  width: 360px;
  padding: 32px 8px 0 8px;
  height: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const CartItem = styled.li`
  padding: 8px;
  background-color: ${cores.bege};
  color: ${cores.vermelhoClaro};
  display: flex;
  margin-bottom: 16px;
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`

export const Prices = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${cores.branco};
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 16px;
`
