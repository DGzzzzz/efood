import { Button, CardContainer, ContainerConteudo } from './styles'

import Tag from '../Tag'
import Nota from '../Nota'
import { TagContainerGroup } from '../Tag/styles'

type Props = {
  title: string
  category: string
  description: string
  nota: string
  image: string
  destaque?: boolean
}

const Card = ({
  title,
  category,
  description,
  nota,
  image,
  destaque
}: Props) => {
  return (
    <CardContainer>
      <img src={image} alt={title} />
      <TagContainerGroup>
        {destaque && <Tag>Destaque do dia</Tag>}
        <Tag>{category}</Tag>
      </TagContainerGroup>
      <Nota value={nota} />
      <ContainerConteudo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button href="#">Saiba mais</Button>
      </ContainerConteudo>
    </CardContainer>
  )
}
export default Card
