import { createGlobalStyle } from 'styled-components'

export const cores = {
  corDeFundo: '#fff8f2',
  vermelhoClaro: '#E66767',
  bege: '#FFEBD9',
  branco: '#fff'
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
    background-color: ${cores.corDeFundo};
  }

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }

  button {
    border: none;
  }
`
