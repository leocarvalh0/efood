import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type CardType = {
  type: 'product' | 'restaurant'
}

export const CardContainer = styled.div<CardType>`
  width: ${({ type }) => (type === 'restaurant' ? '472px' : '320px')};
  padding: ${({ type }) => (type === 'restaurant' ? '0' : '8px')};
  position: relative;
  background-color: ${({ type }) =>
    type === 'restaurant' ? `${cores.branco}` : `${cores.vermelhoClaro}`};
  color: ${({ type }) =>
    type === 'restaurant' ? `${cores.vermelhoClaro}` : `${cores.bege}`};

  img {
    width: 100%;
    height: ${({ type }) => (type === 'restaurant' ? '217px' : '167px')};
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
`

export const Infos = styled.div<CardType>`
  border: ${({ type }) =>
    type === 'restaurant' ? `1px solid ${cores.vermelhoClaro}` : 'none'};
  border-top: none;
  padding: ${({ type }) => (type === 'restaurant' ? '8px' : '0')};
  font-size: 18px;

  h3 {
    font-weight: bold;
    margin: ${(props) =>
      props.type === 'restaurant' ? '0 0 16px 0' : '8px 0'};
  }

  p {
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 8px;
  }

  ${ButtonContainer} {
    width: 100%;
  }
`

export const InfosHeader = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin-left: 8px;
    width: 21px;
    height: 21px;
  }
`

export const Avaliation = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  padding: 32px;
  width: 100%;
  height: 344px;
  background-color: ${cores.vermelhoClaro};
  color: ${cores.branco};
  display: flex;
  z-index: 1;
  position: relative;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    height: 500px;

    h4 {
      margin-top: 24px;
    }
  }

  header > img {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 18px;
    height: 18px;
    margin-right: 0;
    cursor: pointer;
  }

  img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }
`
