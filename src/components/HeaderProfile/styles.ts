import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Header = styled.header`
  height: 186px;
`
export const TextContainer = styled.div`
  display: flex;
  max-width: 1024px;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  height: 186px;
  gap: 300px;

  a,
  img {
    cursor: pointer;
    text-align: center;
    display: flex;
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1020px) {
    width: 50%;
    gap: 235px;
  }
`
export const LinkItem = styled(Link)`
  height: 57px;
`
