import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainerGroup } from '../Tag/styles'
import { NotaContainer } from '../Nota/styles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
  min-height: 400px;
  border: 1px solid ${cores.corTexto};
  background-color: ${cores.corFundoCard};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding-bottom: 20px;

  .card-image {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

  ${TagContainerGroup}, ${NotaContainer} {
    position: absolute;
  }

  ${TagContainerGroup} {
    top: 16px;
    right: 16px;
  }

  ${NotaContainer} {
    bottom: 165px;
    right: 16px;
  }
`

export const ContainerConteudo = styled.div`
  margin: 8px;

  p {
    font-size: 14px;
  }
`

export const Button = styled(Link)`
  background-color: ${cores.corTexto};
  color: ${cores.corFundo};
  width: 82px;
  height: 24px;
  padding: 4px 8px;
  text-decoration: none;
  border-radius: 12px;
`
