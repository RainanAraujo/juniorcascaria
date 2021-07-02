import styled, { css, keyframes } from 'styled-components'
import backgroundContentMain from '../../assets/backgroundContentMain.svg'

interface Props {
  outlined?: boolean
}

export const Container = styled.div`
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #1b1a18;
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
    line-height: 4.6rem;
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
    z-index: 999;
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
  width: 200px;
  border-radius: 5px;
  margin-top: 20px;
  transition: 0.3s;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 20px;
  }
  ${(p: Props) =>
    p.outlined
      ? css`
          background-color: transparent;
          border: #dcdcdc 2px solid;
          color: #fff;

          margin-top: 0;
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

export const ContentSecond = styled.div`
  background-color: #fffae2;
  @media (max-width: 800px) {
    display: none;
  }
  width: 100%;
  height: 100px;
  margin: -60px;
  .wrapper {
  }
`
