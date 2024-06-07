import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import { FooterContainer, RedesSociais } from './styles'

const Rodape = () => (
  <FooterContainer>
    <img src={logo} alt="Logo" />
    <RedesSociais>
      <a href="https://www.facebook.com">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="https://www.twitter.com">
        <img src={twitter} alt="Twitter" />
      </a>
    </RedesSociais>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Rodape
