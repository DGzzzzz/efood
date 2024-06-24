import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .close {
    position: absolute;
    top: 295px;
    right: 440px;
    font-size: 18px;
    background: none;
    border: none;
    color: ${cores.corFundoCard};
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  background: ${cores.corTexto};
  color: ${cores.corFundo};
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1024px;
  height: 344px;
  display: flex;

  .card-image {
    height: 280px;
    width: 280px;
    object-fit: cover;
    padding-right: 24px;
    margin-top: 32px;
    margin-left: 24px;
  }

  .content {
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    h3,
    p {
      margin: 0;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }

  button {
    max-width: 218px;
  }
`
