import { Button, CardContainer, ContainerConteudo } from './styles'

import comida3 from '../../assets/images/comida3.png'

const CardRes = () => {
  return (
    <CardContainer>
      <img src={comida3} alt="Comida" />
      <ContainerConteudo>
        <h3>Pizza Marguerita</h3>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
        <Button>Adicionar ao carrinho</Button>
      </ContainerConteudo>
    </CardContainer>
  )
}
export default CardRes
