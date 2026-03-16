import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 280px;
  padding: 24px 0;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${cores.branco};
    font-size: 32px;
    z-index: 1;
    position: relative;
  }
`

export const Title = styled.p`
  font-weight: 100;
`
