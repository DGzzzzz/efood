import { CardContainer } from './styles'
import comida1 from '../../assets/images/comida1.png'

const Card = () => (
  <CardContainer>
    <img src={comida1} alt="" />
    <div>
      <h3>Hioki Sushi</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eligendi
        soluta modi beatae, cupiditate, vero autem magni repellendus aspernatur
        et, voluptate quia ratione! Nobis rerum sapiente animi hic iusto
        ratione?
      </p>
      <a href="#">Botao</a>
    </div>
  </CardContainer>
)

export default Card
