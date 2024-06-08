import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 24px;
  background-color: ${cores.corTexto};
  border-radius: 12px;
  color: ${cores.corFundo};
  font-size: 12px;
  font-weight: 700;
  position: absolute;
`
