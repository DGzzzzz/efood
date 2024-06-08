import estrela from '../../assets/images/estrela.png'
import { NotaContainer } from './styles'

const Nota = () => (
  <NotaContainer>
    <p>4.6</p>
    <img src={estrela} alt="Estrela" />
  </NotaContainer>
)

export default Nota
