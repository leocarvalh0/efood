import styled from "styled-components";
import banner from '../../assets/images/macarrao.png'
import { Container, cores } from "../../styles";

export const BannerContainer = styled.div`
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 280px;
    font-size: 32px;
    color: ${cores.brancoDois};
    padding-top: 25px;
    font-weight: bold;
    position: relative;

    ${Container} {
        position: relative;
        z-index: 1;
    }

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        content: '';
    }
` 

export const Texto = styled.p`
    font-weight: 100;
    margin-bottom: 156px;
`