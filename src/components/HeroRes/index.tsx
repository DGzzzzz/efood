import {
  ContainerHero,
  HeroFundo,
  HeroTitle,
  Img,
  ImgContainer,
  TitleContainer
} from './styles'

import { Link, useParams } from 'react-router-dom'

import fundoImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/comida2.png'
import { useEffect, useState } from 'react'
import { getCardListRes } from '../../Services/api'

type MenuItem = {
  capa: string
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  titulo: string
  tipo: string
}

interface Detalhes {
  titulo: string
  descricao: string
  tipo: string
  capa: string
  cardapio: MenuItem[]
}

const HeroRes = () => {
  const { id } = useParams()
  const [detalhe, setDetalhe] = useState<MenuItem | null>(null)

  useEffect(() => {
    if (id) {
      getCardListRes(parseInt(id)).then((detalhes) => {
        const destaque = detalhes.cardapio[0]
        setDetalhe(destaque)
      })
    }
  }, [id])

  if (!detalhe) {
    return <div>Carregando...</div>
  }

  return (
    <HeroFundo style={{ backgroundImage: `url(${fundoImg})` }}>
      <ContainerHero>
        <HeroTitle>Restaurantes</HeroTitle>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <p>0 produto(s) no carrinho</p>
      </ContainerHero>
      <ImgContainer>
        {/* Corrigido para usar detalhe.foto */}
        <Img imageUrl={detalhe.foto} />
        <TitleContainer>
          <h2>{detalhe.tipo}</h2>
          <h2>{detalhe.titulo}</h2>
        </TitleContainer>
      </ImgContainer>
    </HeroFundo>
  )
}

export default HeroRes
