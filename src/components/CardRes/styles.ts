import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  width: 320px;
  height: 350px;
  border: 1px solid ${cores.corTexto};
  background-color: ${cores.corTexto};
  position: relative;

  img {
    padding: 8px 8px 0 8px;
  }
`

export const ContainerConteudo = styled.div`
  margin: 8px;

  h3 {
    font-size: 16px;
    color: ${cores.corFundoRodape};
  }
  p {
    font-size: 14px;
    color: ${cores.corFundoRodape};
  }
`

export const Button = styled.button`
  background-color: ${cores.corFundoRodape};
  color: ${cores.corTexto};
  padding: 4px 8px;
  border-color: ${cores.corFundoRodape};
  text-decoration: none;
  width: 100%;

  cursor: pointer;
`
