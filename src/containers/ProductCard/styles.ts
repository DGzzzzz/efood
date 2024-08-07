import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../../components/Button/styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  padding: 8px;
  width: 320px;
  color: ${colors.white};
  margin-bottom: 32px;
  position: relative;
  > img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    background-size: cover;
  }

  h3 {
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  button {
    width: 100%;
    background-color: ${colors.whiteOff};
    border: none;
    color: ${colors.pink};
    font-weight: bold;
    padding: 4px 0;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`
export const ModalContainer = styled.div`
  color: ${colors.white};
  max-width: 1024px;
  height: 334px;
  flex-shrink: 0;
  display: block;
  z-index: 1;
  position: relative;
  background-color: #e66767;
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1020px) {
    max-width: 92%;
    height: 350px;
    padding: 0 auto;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    height: auto;
    max-height: 85vh;
    width: 90%;
    overflow-y: auto;
    margin: 10vh auto;
  }
  header {
    display: flex;
    justify-content: flex-end;

    img {
      margin: 8px;
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }

  main {
    display: flex;
    padding: 0 32px;
    @media (max-width: ${breakpoints.mobile}) {
      display: block;
      text-align: center;
    }
  }
  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin-right: 24px;
    @media (max-width: ${breakpoints.mobile}) {
      display: flex;
      height: 200px;
      width: 200px;
      margin: 0 auto;
      text-align: center;
      padding-bottom: 5px;
    }
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  span {
    display: block;
    font-size: 14px;
    margin: 16px 0;
  }

  ${ButtonContainer} {
    background-color: ${colors.whiteOff};
    padding: 4px 8px;
    font-size: 14px;
    border: none;
    color: ${colors.pink};
    font-weight: bold;
    cursor: pointer;
    width: 218px;
    height: 24px;

    @media (max-width: ${breakpoints.mobile}) {
      margin-bottom: 20px; // Aplica a margem inferior especificamente para o ButtonContainer em dispositivos móveis
    }
  }
}
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`
