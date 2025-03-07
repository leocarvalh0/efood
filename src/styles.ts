import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
    vermelho: '#E66767',
    brancoUm: '#FFF8F2',
    brancoDois: '#FFF',
    bege: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    body {
        background-color: ${cores.brancoUm};
        color: ${cores.vermelho};
    }
`

export const Container = styled.div`
    max-width: 1024px;
    margin: auto; 
`