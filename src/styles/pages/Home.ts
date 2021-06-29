import styled, { css } from 'styled-components'

interface Props {
  outlined?: boolean
}

export const Container = styled.div`
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #d3c6a3;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3.2rem;
    margin: 24px 0;
    text-align: center;
    line-height: 1.4;
    font-weight: 200;
    color: #453404;
  }
`
export const Footer = styled.div`
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
