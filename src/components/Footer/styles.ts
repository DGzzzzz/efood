import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.corFundoRodape};
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`

export const RedesSociais = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`
