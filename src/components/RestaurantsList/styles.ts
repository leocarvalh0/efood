import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 48px;
  justify-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
    grid-template-columns: 1fr;
  }
`
