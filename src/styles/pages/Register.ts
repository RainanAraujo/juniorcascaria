import styled, { css } from 'styled-components'
import { List, Video, CreditCard } from 'react-feather'

interface Props {
  statusStep?: number
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

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`

export const DescriptionsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ContentDescription = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  h2.step1 {
    transition: 0.3s;
    margin-left: 12px;
    font-weight: 400;
    color: #c69244;
  }
  h2.step2 {
    transition: 0.3s;
    margin-left: 12px;
    font-weight: 400;
    color: ${(p: Props) =>
      p.statusStep == 2 || p.statusStep == 3 ? css`#C69244` : '#C4C4C4'};
  }
  h2.step3 {
    transition: 0.3s;
    margin-left: 12px;
    font-weight: 400;
    color: ${(p: Props) => (p.statusStep == 3 ? css`#C69244` : '#C4C4C4')};
  }
`

export const ListIcon = styled(List)`
  color: #c69244;
`

export const VideoIcon = styled(Video)`
  transition: 0.3s;
  color: ${(p: Props) =>
    p.statusStep == 2 || p.statusStep == 3 ? css`#C69244` : '#C4C4C4'};
`

export const CardIcon = styled(CreditCard)`
  transition: 0.3s;
  color: ${(p: Props) => (p.statusStep == 3 ? css`#C69244` : '#C4C4C4')};
`

export const ProgressSteps = styled.div`
  margin-top: 12px;
`

export const ProgressBar = styled.div`
  background-color: #ededed;
  height: 10px;
  border-radius: 10px;
  width: 100%;
`

export const CurrentProgressBar = styled.div`
  background-color: #dd901d;
  height: 10px;
  border-radius: 10px;
  transition: width 0.5s 0s ease-in-out;
  width: ${(p: Props) =>
    (p.statusStep == 1 && '33.33%') ||
    (p.statusStep == 2 && '66.66%') ||
    (p.statusStep == 3 && '100%')};
`

export const Input = styled.input`
  background-color: transparent;
  border-radius: 10px;
  border: #e3e3e3 2px solid;
  height: 50px;
  width: 100%;
  padding: 0 12px;
  color: #45433f;
  font-size: 1.4rem;
  margin-bottom: 12px;
`

export const Form = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    color: #8d8d8d;
    font-weight: 700;
    margin-bottom: 8px;
  }
  label.center {
    text-align: center;
    width: 100%;
  }
  .info {
    color: #8d8d8d;
    font-weight: 400;
    line-height: 1.6rem;
    margin-bottom: 12px;
    margin-top: -4px;
  }
  select {
    background-color: transparent;
    border-radius: 10px;
    border: #e3e3e3 2px solid;
    height: 50px;
    width: 100%;
    padding: 0 12px;
    color: #45433f;
    font-size: 1.4rem;
    margin-bottom: 12px;
  }

  .address {
    display: flex;

    .groupDistrict {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .groupNumber {
      margin-left: 12px;
      width: 30%;
      display: flex;
      flex-direction: column;
    }
  }
`
export const Button = styled.button`
  width: 100%;
  padding: 16px 0;

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
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  div {
    width: 20px;
  }
`
export const Tutorial = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-bottom: 36px;
  margin-top: 10px;
  .groupStepTutorial {
    display: flex;
    h2 {
      font-weight: 300;
      font-size: 1.8rem;
      line-height: 2.4rem;
      margin-left: 18px;
    }
  }
`
