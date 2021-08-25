import styled, { css, keyframes } from 'styled-components'
import backgroundContentMain from '../../assets/backgroundContentMain.svg'

interface Props {
  outlined?: boolean
}

const backgroundAnim = keyframes`
  0%{
    background-position:0% 96%
  }
  50%{
    background-position:100% 5%
  }
  100%{
    background-position:0% 96%
  }
`

export const Container = styled.div`
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: linear-gradient(46deg, #3d2515, #1b1a18, #e0d394);
  background-size: 600% 600%;
  animation: ${backgroundAnim} 13s ease infinite;
`

export const Header = styled.div`
  height: 80px;
  max-width: 1080px;
  padding: 0 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 80px;
  }
`

export const ContentMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const BackgroundContentMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${backgroundContentMain});
`

export const WrapperContentMain = styled.div`
  max-width: 1080px;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    @media (max-width: 800px) {
      width: 70%;
    }

    width: 25%;
  }
  img.organization {
    width: 100px;
    animation: none;
  }
  h1 {
    font-size: 3.6rem;
    margin: 24px 0;
    text-align: center;
    line-height: 1.4;
    font-weight: 200;
    color: #f8f1df;
  }
`
export const Footer = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #e0d394;
  div {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    max-width: 1080px;
    width: 100%;
  }
  a {
    cursor: pointer;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 0;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 20px 0;
  }
  h1 {
    color: #fffad1;
    font-weight: 900;
    text-align: start;
    line-height: 4.4rem;
    font-size: 4rem;
    @media (max-width: 800px) {
      text-align: center;
      font-size: 3.6rem;
    }
  }
  span {
    color: #fffbef;
    font-size: 1.4rem;
    line-height: 2.3rem;
    font-weight: 400;
    @media (max-width: 800px) {
      text-align: center;
    }
  }
`

export const Graphics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;

  .logo {
    width: 350px;
    margin-right: 50px;
  }
  .stage {
    width: 570px;
    margin-top: 20px;
    position: relative;
    z-index: 2;
  }
  @media (max-width: 800px) {
    margin-left: 0;
    justify-content: center;
    .logo {
      width: 200px;
      margin-right: 0;
    }
    .stage {
      width: 270px;
    }
  }
`

export const Button = styled.button`
  padding: 16px 32px;
  font-weight: 500;
  border-radius: 5px;

  transition: 0.3s;

  cursor: pointer;
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 14x;
    padding: 24px 32px;
    font-size: 2rem;
  }
  ${(p: Props) =>
    p.outlined
      ? css`
          background-color: transparent;
          border: #dcdcdc 2px solid;
          color: #fff;
        `
      : css`
          color: #000;
          background-color: #fffad1;
          border: none;
          :hover {
            background-color: #f6b24c;
          }
        `};
`

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  margin-top: 29px;
  align-items: center;
  img {
    width: 200px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`

export const ContentSecond = styled.div`
  background-color: #fffae2;
  padding: 40px 0;
  width: 100%;
  margin: -60px;
  @media (max-width: 800px) {
    margin: 0;
    padding: 16px;
  }

  h1 {
    color: #3d2515;
    font-weight: 900;
    text-align: start;
    line-height: 4.4rem;
    font-size: 3rem;
    @media (max-width: 800px) {
      text-align: center;
      font-size: 3.6rem;
    }
  }
  .wrapper {
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
  .logoSponsorship {
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;
    background-color: #fff;
    @media (max-width: 800px) {
      flex-direction: column;
    }
    img {
      width: 200px;
      margin: 0 12px;
    }
    #dalcotone {
      margin: 62px 0;
    }
  }
`
