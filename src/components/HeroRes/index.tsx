import {
  ContainerHero,
  HeroFundo,
  HeroTitle,
  Img,
  ImgContainer,
  TitleContainer
} from './styles'

import fundoImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/comida2.png'

const HeroRes = () => (
  <HeroFundo style={{ backgroundImage: `url(${fundoImg})` }}>
    <ContainerHero>
      <HeroTitle>Restaurantes</HeroTitle>
      <img src={logo} alt="Logo Empresa" />
      <p>0 produto(s) no carrinho</p>
    </ContainerHero>
    <ImgContainer>
      <Img imageUrl={banner} />
      <TitleContainer>
        <h2>Italiana</h2>
        <h2>La Dolce Vita Trattoria</h2>
      </TitleContainer>
    </ImgContainer>
  </HeroFundo>
)

export default HeroRes
