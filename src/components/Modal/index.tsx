import { ModalContainer, ModalContent } from './styles'

type ModalProps = {
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close" onClick={onClose}>
          X
        </button>
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
