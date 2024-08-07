import { List } from './styles'
import ProductCard from '../ProductCard'

export type Props = {
  itens: Item[]
}

const ProductList = ({ itens }: Props) => {
  return (
    <div>
      <List>
        {itens.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </List>
    </div>
  )
}

export default ProductList
