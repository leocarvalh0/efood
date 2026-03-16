import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  color: ${cores.vermelhoClaro};
  background-color: ${cores.bege};
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  color: ${cores.bege};
  background-color: ${cores.vermelhoClaro};
  display: inline-block;
  margin-right: 8px;
`
