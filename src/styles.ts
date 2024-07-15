import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  white: '#FFFFFF',
  yellow: '#FFB930',
  whiteOff: '#FFEBD9'
}

export const breakpoints = {
  mobile: '676px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto,sans-serif ;
list-style: none;
}
body{
  background-color: ${colors.white};
  color:${colors.pink};


}
.container{
    width: 100%;
    margin: 0 auto;
    @media (max-width: ${breakpoints.mobile}) {
      max-width: 92%;
      padding: 0 auto;
    }
    @media (min-width: ${breakpoints.tablet}) and (max-width: 1020px) {
      max-width: 95%;
      padding: 0 auto;
    }
}
`
