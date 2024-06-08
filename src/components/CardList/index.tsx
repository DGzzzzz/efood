import Card from '../Card'
import { CardListContainer } from './styles'
import comida1 from '../../assets/images/comida1.png'
import comida2 from '../../assets/images/comida2.png'

const CardList = () => (
  <CardListContainer>
    <Card
      title="Hioki Sushi"
      destaque={true}
      category="Japonesa"
      description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
      nota="4.8"
      image={comida1}
    />
    <Card
      title="La Dolce Vita Trattoria"
      category="Italiana"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      nota="4.9"
      image={comida2}
    />
    <Card
      title="La Dolce Vita Trattoria"
      category="Italiana"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      nota="4.9"
      image={comida2}
    />
    <Card
      title="La Dolce Vita Trattoria"
      category="Italiana"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      nota="4.9"
      image={comida2}
    />
    <Card
      title="La Dolce Vita Trattoria"
      category="Italiana"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      nota="4.9"
      image={comida2}
    />
    <Card
      title="La Dolce Vita Trattoria"
      category="Italiana"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      nota="4.9"
      image={comida2}
    />
  </CardListContainer>
)

export default CardList
