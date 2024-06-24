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
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const HeroRes = () => {
  const { id } = useParams()
  const [detalhe, setDetalhe] = useState<Detalhes | null>(null)

  useEffect(() => {
    if (id) {
      getCardListRes(parseInt(id)).then((data) => {
        setDetalhe(data)
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
        <Img imageUrl={detalhe.capa}>
          <TitleContainer>
            <h2>{detalhe.tipo}</h2>
            <h2>{detalhe.titulo}</h2>
          </TitleContainer>
        </Img>
      </ImgContainer>
    </HeroFundo>
  )
}

export default HeroRes
