import { createGlobalStyle } from 'styled-components'

export const cores = {
  corFundo: '#FFF8F2',
  corTexto: '#E66767',
  corFundoCard: '#fff',
  corFundoRodape: '#FFEBD9'
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.corFundo};
    color: ${cores.corTexto};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
