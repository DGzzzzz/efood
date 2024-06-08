import styled from 'styled-components'
import { cores } from '../../styles'

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 24px;
  background-color: ${cores.corTexto};
  border-radius: 12px;
  color: ${cores.corFundo};
  font-size: 12px;
  font-weight: 700;
`
export const TagContainerGroup = styled.div`
  display: flex;
  gap: 10px;
`
