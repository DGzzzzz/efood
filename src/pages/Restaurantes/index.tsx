import { useEffect, useState } from 'react'
import CardListRes from '../../components/CardListRes'
import Rodape from '../../components/Footer'
import HeroRes from '../../components/HeroRes'

const Restaurantes = () => {
  const [id, setId] = useState<string>('')

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((response) => response.json())
      .then((data) => {
        setId(data.id)
      })
      .catch((error) =>
        console.error('Erro ao buscar dados do cardápio: ', error)
      )
  }, [])

  return (
    <>
      <HeroRes />
      <div className="container">
        <CardListRes />
      </div>
      <Rodape />
    </>
  )
}
export default Restaurantes
