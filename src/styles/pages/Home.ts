import styled, { css, keyframes } from 'styled-components'
import background from '../../assets/background.svg'
interface Props {
  outlined?: boolean
}

const animateBg = keyframes` 
0% { background-position: 0% 0%; }
100% { background-position: 0% 100%; }`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    background-position: center;
  }
`
export const Container = styled.div`
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  animation: ${animateBg} 5s alternate-reverse infinite;
  background-image: linear-gradient(50deg, #c09b6f, #76543e, #c09b6f);
  background-size: 100% 1100%;
`

export const Header = styled.div`
  height: 80px;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 80px;
  }
`
export const Content = styled.div`
  max-width: 1280px;
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
  @media (max-width: 800px) {
    display: none;
  }
  width: 100%;
  margin-top: 50px;
  background-color: #f8f8f8;
  div {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    max-width: 1280px;
    width: 100%;
  }
  a {
    cursor: pointer;
  }
`
export const WrapperOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  h1 {
    color: #453404;
    font-weight: 500;
    text-align: start;
    @media (max-width: 800px) {
      text-align: center;
    }
  }
  span {
    color: #fffbef;
    font-size: 1.2rem;
    line-height: 2rem;
    @media (max-width: 800px) {
      text-align: center;
    }
  }
  .divider {
    height: 150px;
    width: 2px;
    background-color: #ebebeb;
    margin: 0 30px;
    @media (max-width: 800px) {
      display: none;
    }
  }
  .subscribeOpened,
  .subscribeCheck {
    display: grid;
    grid-template-rows: 1fr 1fr auto;
    @media (max-width: 800px) {
      width: 80%;
      grid-template-rows: 1fr 0.8fr auto;
    }
    width: 400px;
  }
`
export const Button = styled.button`
  padding: 16px 32px;
  font-weight: 500;
  width: 200px;
  border-radius: 5px;
  margin-top: 12px;
  transition: 0.3s;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 0;
  }
  ${(p: Props) =>
    p.outlined
      ? css`
          background-color: transparent;
          border: #dcdcdc 2px solid;
          color: #fff;
        `
      : css`
          color: #fff;
          background-color: #dd901d;
          border: none;
          :hover {
            background-color: #f6b24c;
          }
        `};
`
