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
        text-decoration: none;
    }

    body {
        background-color: ${cores.brancoUm};
        color: ${cores.vermelho};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto; 
    }
`