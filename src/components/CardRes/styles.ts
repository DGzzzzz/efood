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
  padding: 8px;

  .card-image {
    width: calc(100% - 16px);
    min-height: 150px;
    object-fit: cover;
    background-size: cover;
    margin: 8px;
  }
`

export const ContainerConteudo = styled.div`
  flex: 1;

  h3,
  p {
    margin: 8px;
  }

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
  border-color: ${cores.corFundoRodape};
  width: 100%;
  border: none;
  font-weight: bold;
  padding: 4px 0px;
  cursor: pointer;
  border-radius: 8px;

  &.modal-button {
    max-width: 280px;
  }
`
