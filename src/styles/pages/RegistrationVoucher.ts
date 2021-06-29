import styled, { css } from 'styled-components'

interface Props {
  outlined?: boolean
}
export const Container = styled.div`
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  height: 80px;
  max-width: 1280px;
  width: 100%;
`

export const Content = styled.div`
  @media (max-width: 800px) {
    width: 90%;
  }
  max-width: 1280px;
  width: 400px;
  min-height: 75vh;
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

export const Input = styled.input`
  background-color: transparent;
  border-radius: 10px;
  margin-top: 8px;
  border: #e3e3e3 2px solid;
  height: 50px;
  width: 100%;
  padding: 0 12px;
  color: #45433f;
  font-size: 1.4rem;
  margin-bottom: 12px;
`
export const Button = styled.button`
  width: 80%;
  padding: 16px 0;
  @media (max-width: 800px) {
    width: 100%;
  }
  font-weight: 500;

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
