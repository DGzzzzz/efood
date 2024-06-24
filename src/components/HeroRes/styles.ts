import styled from 'styled-components'

interface ImgProps {
  imageUrl: string
}

export const HeroFundo = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`

export const HeroTitle = styled.h1`
  font-size: 18px;
  font-weight: 100;
`

export const Img = styled.div<ImgProps>`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.6)
    ),
    url(${(props) => props.imageUrl});
`

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  gap: 64px;

  > h2:first-child {
    font-weight: 100;
    font-size: 32px;
  }
  > h2 {
    font-weight: 900;
    font-size: 32px;
  }
`

export const ContainerHero = styled.div`
  display: flex;
  max-width: 1024px;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  height: 186px;
  gap: 300px;
`
