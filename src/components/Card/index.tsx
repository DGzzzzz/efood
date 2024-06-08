import { Button, CardContainer, ContainerConteudo } from './styles'
import comida1 from '../../assets/images/comida1.png'
import Tag from '../Tag'
import Nota from '../Nota'

const Card = () => (
  <CardContainer>
    <img src={comida1} alt="" />
    <Tag size="small">Japonesa</Tag>
    <Nota />
    <ContainerConteudo>
      <h3>Hioki Sushi</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eligendi
        soluta modi beatae, cupiditate, vero autem magni repellendus aspernatur
        et, voluptate quia ratione! Nobis rerum sapiente animi hic iusto
        ratione?
      </p>
      <Button href="#">Saiba mais</Button>
    </ContainerConteudo>
  </CardContainer>
)

export default Card
