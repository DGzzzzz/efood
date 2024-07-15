import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from './index'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.pink};
  color: ${colors.white};
  height: 26px;
  width: 61px;
  font-size: 12px;
  padding: 4px 6px;
`
