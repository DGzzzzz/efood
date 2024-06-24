import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  width: 320px;
  min-height: 350px;
  border: 1px solid ${cores.corTexto};
  background-color: ${cores.corTexto};
  position: relative;
  display: flex;
  flex-direction: column;

  .card-image {
    width: 100%;
    min-height: 167px;
    object-fit: cover;
    bacgorund-size: cover;
  }
`

export const ContainerConteudo = styled.div`
  margin: 8px;
  flex: 1;

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
  border-radius: 12px;
  cursor: pointer;
`
