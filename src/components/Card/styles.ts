import { styled } from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
    font-size: 14px;
    position: relative;

    img {
        display: block;
    }
`

export const CardInfos = styled.div`
    padding: 8px;
    border: 1px solid ${cores.vermelho};
    border-top: none;
`

export const InfosHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Title = styled.p`
    font-size: 18px;
    font-weight: bold;
`

export const Description = styled.p`
    line-height: 22px;
    margin-top: 16px;
`

export const Button = styled.button`
    width: 82px;
    height: 24px;   
    padding: 4px 6px;
    border: none;
    font-weight: bold;
`

export const Avaliation = styled.div`
    display: flex;
    align-items: center;
    
    img {
        margin-left: 8px;
    }
`

export const Tags = styled.div`
    display: flex;
    position: absolute;
    top: 8px;
    right: 0;
`