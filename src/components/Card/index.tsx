import React from 'react'
import { Button, CardContainer, ContainerConteudo } from './styles'
import Tag from '../Tag'
import Nota from '../Nota'
import { TagContainerGroup } from '../Tag/styles'

// Define the props expected by the Card component
type Props = {
  id: number
  title: string
  category: string
  description: string
  nota: string
  image: string
  destaque?: boolean
}

const Card = ({
  id,
  title,
  category,
  description,
  nota,
  image,
  destaque
}: Props) => {
  return (
    <CardContainer>
      <img className="card-image" src={image} alt={title} />
      <TagContainerGroup>
        {destaque && <Tag>Destaque do dia</Tag>}
        <Tag>{category}</Tag>
      </TagContainerGroup>
      <Nota value={nota} />
      <ContainerConteudo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button to={`/restaurantes/${id}`}>Saiba mais</Button>
      </ContainerConteudo>
    </CardContainer>
  )
}

export default Card
