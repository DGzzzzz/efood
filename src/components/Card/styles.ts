import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainerGroup } from '../Tag/styles'
import { NotaContainer } from '../Nota/styles'

export const CardContainer = styled.div`
  width: 472px;
  height: 400px;
  border: 1px solid ${cores.corTexto};
  background-color: ${cores.corFundoCard};
  position: relative;

  ${TagContainerGroup} {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  ${NotaContainer} {
    bottom: 140px;
    right: 16px;
  }
`

export const ContainerConteudo = styled.div`
  margin: 8px;

  p {
    font-size: 14px;
  }
`

export const Button = styled.a`
  background-color: ${cores.corTexto};
  color: ${cores.corFundo};
  width: 82px;
  height: 24px;
  padding: 4px 8px;
  text-decoration: none;
`
