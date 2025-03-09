import styled from "styled-components"
import { cores } from "../../styles"

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: 1001;
    
    &.visible {
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
        margin-bottom: 16px;
    }

    p {
        margin-bottom: 16px;
    }
`