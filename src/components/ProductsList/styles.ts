import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    row-gap: 80px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 40px;
    margin-top: 40px;
  }
`
