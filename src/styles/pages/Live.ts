import styled, { css, keyframes } from 'styled-components'

interface Props {
  outlined?: boolean
  selected?: boolean
}
export const Container = styled.div`
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  max-width: 1080px;
  padding: 40px 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    height: 60px;
  }
`

export const Content = styled.div`
  @media (max-width: 800px) {
    width: 90%;
    margin-bottom: 100px;
    min-height: 50vh;
  }
  min-height: 57vh;
  max-width: 1280px;

  width: 100%;
  margin-bottom: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    @media (max-width: 800px) {
      font-size: 2.8rem;
    }
    font-size: 3.2rem;
    margin: 14px 0;
    text-align: center;
    line-height: 1.4;
    font-weight: 200;
  }
  span {
    text-align: center;
    color: #a0a0a0;
    font-size: 1.2rem;
    line-height: 2rem;
    width: 400px;
    @media (max-width: 800px) {
      width: 100%;
      font-size: 1.4rem;
    }
  }
  .form {
    margin-top: 16px;
    width: 80%;
    @media (max-width: 800px) {
      width: 100%;
    }
    label {
      color: #8d8d8d;
      font-weight: 700;
      margin-bottom: 8px;
    }
  }
`
export const Footer = styled.div`
  width: 100%;
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

export const Button = styled.button`
  width: 80%;
  padding: 16px 0;
  margin-right: 10px;
  @media (max-width: 800px) {
    width: 100%;
    margin-right: 0;
  }
  font-weight: 500;
  max-width: 300px;
  border-radius: 5px;
  margin-top: 12px;
  transition: 0.3s;
  cursor: pointer;

  ${(p: Props) =>
    p.outlined
      ? css`
          background-color: transparent;
          border: #dcdcdc 2px solid;
          color: #322f29;
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

export const ButtonGroup = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
