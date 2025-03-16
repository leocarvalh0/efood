import { styled } from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'
import { ButtonLink } from '../Button/styles'

export const Container = styled.div`
    
`

export const CardContainer = styled.div<Pick<Props, 'display'>>`
    padding: ${(props) => props.display === "home" ? "" : "8px" };
    font-size: 14px;
    position: relative;
    max-width: ${(props) => props.display === "home" ? "472px" : "320px" };
    height: ${(props) => props.display === "home" ? "398px" : ""} ;
    background-color: ${(props) => props.display === "home" ? `${cores.brancoUm}` : `${cores.vermelho}` };
    color: ${(props) => props.display === "home" ? `${cores.vermelho}` : `${cores.brancoUm}` };

    img {
        width: 100%;
        height: ${(props) => props.display === "home" ? "217px" : "167px" };
        object-fit: cover;
        display: block;
    }
`

export const CardInfos = styled.div<Pick<Props, 'display'>>`
    padding: ${(props) => props.display === "home" ? "8px" : "8px 0 0 0" };
    border: ${(props) => props.display === "home" ? `1px solid ${cores.vermelho}` : "none" };
    border-top: none;

    ${ButtonLink} {
        display: block;
        width: ${(props) => props.display === "home" ? "82px" : "100%" };
        background-color: ${(props) => props.display === "home" ? `${cores.vermelho}` : `${cores.bege}` };
        color: ${(props) => props.display === "home" ? `${cores.bege}` : `${cores.vermelho}` };
        text-align: center;
    }
`

export const InfosHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Title = styled.p`
    font-size: 18px;
    font-weight: bold;
`

export const Description = styled.p<Pick<Props, 'display'>>`
    line-height: 22px;
    margin: ${(props) => props.display === "home" ? "16px 0" : "8px 0" };
`

export const Avaliation = styled.div`
    display: flex;
    align-items: center;
    
    img {
        width: 21px;
        height: 21px;
        margin-left: 8px;
    }
`

export const Tags = styled.div`
    display: flex;
    position: absolute;
    top: 8px;
    right: 0;
`

export const ButtonClose = styled.div`
    position: absolute;
    top: 0;
`

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: 1001;
    background-color: rgba(0, 0, 0, 0.7);

    &.visivel {
        display: flex;
        align-items: center;
    }
`
        
export const ModalContent = styled.div`
    width: 1024px;
    height: 344px;
    margin: 0 auto;
    padding: 32px;
    background-color: ${cores.vermelho};
    color: ${cores.brancoDois};
    display: flex;
    position: relative;

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
    }
`

export const ModalInfos = styled.div`
    margin-left: 24px;
    font-size: 14px;
    line-height: 22px;

    h3 {
        font-size: 18px;
    }

    p {
        margin: 16px 0;
    }

    img {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 8px;
        right: 8px;
        cursor: pointer;
    }

    button {
        background-color: ${cores.bege};
        color: ${cores.vermelho};
        padding: 4px 8px;
        font-weight: bold;
        border: none;
    }
`