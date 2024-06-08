import estrela from '../../assets/images/estrela.png'
import { NotaContainer } from './styles'

export type Props = {
  value: string
}

const Nota = ({ value }: Props) => {
  return (
    <NotaContainer>
      <p>{value}</p>
      <img src={estrela} alt="Estrela" />
    </NotaContainer>
  )
}
export default Nota
