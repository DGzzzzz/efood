import style from 'styled-components'

interface ImgProps {
  imageUrl: string
}

export const HeroFundo = style.div`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`

export const HeroTitle = style.h1`
  font-size: 18px;
  font-weight: 900;
`

export const Img = style.div<ImgProps>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${(
    props
  ) => props.imageUrl});
`

export const ImgContainer = style.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const TitleContainer = style.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > h2 {
    font-size: 32px;
    font-weight: 900;
  }

  > h2:first-child {
    font-weight: 100;
}
`

export const ContainerHero = style.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px;
`
