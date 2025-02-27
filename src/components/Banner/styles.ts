import styled from "styled-components";
import banner from '../../assets/images/macarrao.png'
import { cores } from "../../styles";

export const BannerContainer = styled.div`
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    height: 280px;
    font-size: 32px;
    color: ${cores.brancoDois};
    padding-top: 25px;
    font-weight: bold;
` 

export const Texto = styled.p`
    font-weight: 100;
    margin-bottom: 156px;
`