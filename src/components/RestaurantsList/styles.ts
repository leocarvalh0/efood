import { styled } from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 80px;
    margin-top: 80px;
    margin-bottom: 120px;
    background-color: ${cores.brancoDois};
`