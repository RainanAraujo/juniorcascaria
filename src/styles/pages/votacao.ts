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
  width: 100%;
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
    width: 400px;
    @media (max-width: 800px) {
      width: 100%;
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

export const ParticipantsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 400px);

  justify-content: center;
  margin: 22px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`

export const ButtonParticipant = styled.button`
  border-radius: 10px;
  border: 1px #dfdbdb solid;
  background-color: transparent;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;

  .description {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  h2 {
    font-weight: bold;
    font-size: 16px;
  }
  h3 {
    font-weight: 200;
    font-size: 12px;
  }
  img {
  }
`

export const PopUpVoting = styled.div`
  position: fixed;
  bottom: 100px;
  background-color: #fff;
  border-radius: 10px;
  padding: 22px;
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.12);
  transition: 0.3s;
  p {
    text-align: center;
    color: #a0a0a0;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 12px;
  }
  @media (max-width: 800px) {
    width: 90%;
    p {
      font-size: 1.6rem;
    }
  }
`
