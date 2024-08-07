import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../../components/Button/styles'

type InputGroupProps = {
  maxwidth?: string
  marginBottom?: string
}

type RowProps = {
  marginBottom?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`
export const SiderBar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  max-width: 360px;
  padding: 32px 8px 0 8px;
  width: 100%;
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 70%;
  }
  ${ButtonContainer} {
    background-color: ${colors.whiteOff};
    height: 24px;
    margin-bottom: 8px;
    max-width: 344px;
    width: 100%;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }
  .text-cart {
    color: ${colors.whiteOff};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 16px;
  }
  h3 {
    color: ${colors.whiteOff};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 16px;
  }
  p {
    color: ${colors.whiteOff};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
    text-align: justify;
  }
`
export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 34px;
  margin-bottom: ${(props) => props.marginBottom || '8px'};
`
export const InputGroup = styled.div<InputGroupProps>`
  position: relative;
  max-width: 344px;
  max-width: ${(props) => props.maxwidth || 'auto'};
  margin-bottom: ${(props) => props.marginBottom || '8px'};
  justify-content: space-between;
  flex: auto;
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${colors.whiteOff};
  }
  input {
    width: 100%;
    height: 32px;
    padding: 0 8px;
    font-weight: bold;
    border: 1px solid ${colors.whiteOff};
    background-color: ${colors.whiteOff};
    &.error {
      border: 4px solid red;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`
