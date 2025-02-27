import { styled } from 'styled-components'
import { Props } from '.'
import { Avaliation, Button, CardContainer } from '../Card/styles'
import { cores } from '../../styles'

export const List = styled.ul<Omit<Props, 'products'>>`
    display: grid;
    grid-template-columns: ${(props) => props.tipo === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
    grid-gap: ${(props) => props.tipo === 'home' ? '80px' : '32px'};
    margin-top: 80px;
    margin-bottom: 120px;
    background-color: ${cores.brancoDois};

    ${CardContainer} {
        width: ${(props) => props.tipo === 'home' ? '472px' : '320px'};
        padding: ${(props) => props.tipo === 'home' ? '0' : '8px'};
        background-color: ${(props) => props.tipo === 'home' ? cores.brancoDois : cores.vermelho};
        color: ${(props) => props.tipo === 'home' ? cores.vermelho : cores.bege};
    }

    ${Button} {
        width: ${(props) => props.tipo === 'home' ? '80px' : '100%'};
        margin-top: ${(props) => props.tipo === 'home' ? '20px' : '8px'};
        background-color: ${(props) => props.tipo === 'home' ? cores.vermelho : cores.bege};
        color: ${(props) => props.tipo === 'home' ? cores.bege : cores.vermelho};
    }

    ${Avaliation} {
        img {
            display: ${(props) => props.tipo === 'home' ? 'inline' : 'none'};
        }
    }
`