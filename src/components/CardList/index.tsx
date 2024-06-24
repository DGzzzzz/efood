// CardList.tsx
import React, { useState, useEffect } from 'react'
import Card from '../Card'
import { CardListContainer } from './styles'
import { getCardList } from '../../Services/api'

interface CardData {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const CardList = () => {
  const [cardList, setCardList] = useState<CardData[]>([])

  useEffect(() => {
    getCardList().then((data) => {
      setCardList(data)
    })
  }, [])

  return (
    <CardListContainer>
      {cardList.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.titulo}
          category={card.tipo}
          description={card.descricao}
          nota={card.avaliacao}
          image={card.capa}
          destaque={card.destacado}
        />
      ))}
    </CardListContainer>
  )
}

export default CardList
