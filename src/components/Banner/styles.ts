import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  background-repeat: no-repeat;
  background-size: size;
  height: 280px;
  padding: 24px 0;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${cores.branco};
    font-size: 32px;
  }
`

export const Title = styled.p`
  font-weight: 100;
`
