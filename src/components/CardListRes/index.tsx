import { CardListContainer } from './styles'
import CardRes from '../CardRes'
import { useEffect, useState } from 'react'
import { getCardListRes } from '../../Services/api'
import { useParams } from 'react-router-dom'

type MenuItem = {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
  titulo: string
}

interface Detalhes {
  titulo: string
  descricao: string
  cardapio: MenuItem[]
}

const CardListRes = () => {
  const { id } = useParams()
  const [detalhes, setDetalhes] = useState<Detalhes | null>(null)

  useEffect(() => {
    if (id) {
      getCardListRes(parseInt(id)).then(setDetalhes)
    }
  }, [id])

  if (!detalhes) {
    return <div>Carregando...</div>
  }

  return (
    <CardListContainer>
      {detalhes.cardapio.map((item) => (
        <CardRes
          key={item.id}
          nome={item.nome}
          descricao={item.descricao}
          foto={item.foto}
          id={item.id}
          titulo={item.titulo}
          preco={item.preco ?? 0}
          porcao={item.porcao ?? ''}
        />
      ))}
    </CardListContainer>
  )
}

export default CardListRes
