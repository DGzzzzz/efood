import Modal from '../Modal'
import { Button, CardContainer, ContainerConteudo } from './styles'

import { useEffect, useState } from 'react'

type Props = {
  id: number
  titulo: string
  descricao: string
  foto: string
  nome: string
  preco: number
  porcao: string
}

type MenuItem = {
  nome: string
  descricao: string
  foto: string
}

const CardRes = ({ id, descricao, foto, nome, preco, porcao }: Props) => {
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setMenuItem(data))
      .catch((error) =>
        console.error('Erro ao buscar dados do cardápio: ', error)
      )
  }, [id])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  if (!menuItem) {
    return <p>Carregando...</p>
  }

  return (
    <CardContainer>
      <img className="card-image" src={foto} alt="" />
      <ContainerConteudo>
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <Button onClick={toggleModal}>Adicionar ao carrinho</Button>
      </ContainerConteudo>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <img className="card-image-modal" src={foto} alt="" />
          <div className="content">
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <Button className="modal-button">
              Adicionar ao carrinho - R$ {preco}
            </Button>
          </div>
        </Modal>
      )}
    </CardContainer>
  )
}

export default CardRes
