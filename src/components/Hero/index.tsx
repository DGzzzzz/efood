import { HeroFundo, HeroTitle } from './styles'

import fundoImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <HeroFundo style={{ backgroundImage: `url(${fundoImg})` }}>
    <img src={logo} alt="Logo Empresa" />
    <HeroTitle>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </HeroTitle>
  </HeroFundo>
)

export default Hero
