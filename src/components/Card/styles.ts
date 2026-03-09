import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const CardContainer = styled.div<
  Omit<Props, 'image' | 'title' | 'description' | 'button'>
>`
  width: ${({ type }) => (type === 'restaurant' ? '472px' : '320px')};
  padding: ${({ type }) => (type === 'restaurant' ? '0' : '8px')};
  position: relative;
  background-color: ${({ type }) =>
    type === 'restaurant' ? `${cores.branco}` : `${cores.vermelhoClaro}`};
  color: ${({ type }) =>
    type === 'restaurant' ? `${cores.vermelhoClaro}` : `${cores.bege}`};
`

export const Infos = styled.div<
  Omit<Props, 'image' | 'title' | 'description' | 'button'>
>`
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
