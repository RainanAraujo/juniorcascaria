import styled, { css } from 'styled-components'
import { List, Video, CreditCard } from 'react-feather'
import CircularProgress from '@material-ui/core/CircularProgress'
import Select from 'react-select'
interface Props {
  statusStep?: number
  outlined?: boolean
  error?: boolean
  disabled?: boolean
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
  @media (max-width: 800px) {
    width: 90%;
  }
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
    @media (max-width: 800px) {
      margin-left: 4px;
    }
  }
  h2.step2 {
    transition: 0.3s;
    margin-left: 12px;
    font-weight: 400;
    @media (max-width: 800px) {
      margin-left: 4px;
    }
    color: ${(p: Props) =>
      p.statusStep === 2 || p.statusStep === 3 ? css`#C69244` : '#C4C4C4'};
  }
  h2.step3 {
    transition: 0.3s;
    margin-left: 12px;
    font-weight: 400;
    @media (max-width: 800px) {
      margin-left: 4px;
    }
    color: ${(p: Props) => (p.statusStep === 3 ? css`#C69244` : '#C4C4C4')};
  }
`

export const ListIcon = styled(List)`
  color: #c69244;
  @media (max-width: 800px) {
    width: 20px;
  }
`

export const VideoIcon = styled(Video)`
  && {
    transition: 0.3s;
    color: ${(p: Props) =>
      p.statusStep === 2 || p.statusStep === 3 ? css`#C69244` : '#C4C4C4'};
  }
  @media (max-width: 800px) {
    width: 20px;
  }
`

export const CardIcon = styled(CreditCard)`
  transition: 0.3s;
  color: ${(p: Props) => (p.statusStep === 3 ? css`#C69244` : '#C4C4C4')};
  @media (max-width: 800px) {
    width: 20px;
  }
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
    (p.statusStep === 1 && '33.33%') ||
    (p.statusStep === 2 && '66.66%') ||
    (p.statusStep === 3 && '100%')};
`

export const Input = styled.input`
  border-radius: 5px;
  border: #dadada 1.2px solid;
  height: 40px;
  width: 100%;
  padding: 0 12px;
  color: #45433f;
  font-size: 1.2rem;
  margin-bottom: 12px;
  ${(p: Props) =>
    p.error === false &&
    css`
      background-color: #ffd6d6;
      border-color: #ff9f9f;
    `}
`

export const Form = styled.div`
  width: 350px;
  @media (max-width: 800px) {
    width: 90%;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    color: #8d8d8d;
    font-weight: 700;
    margin-bottom: 8px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
    border-radius: 5px;
    border: #e3e3e3 2px solid;
    height: 40px;
    width: 100%;
    padding: 0 12px;
    color: #45433f;
    font-size: 1.2rem;
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

  .react-autosuggest__container {
    position: relative;
    width: 100%;
  }

  .react-autosuggest__input {
    background-color: transparent;
    border-radius: 10px;
    border: #e3e3e3 1px solid;
    height: 50px;
    width: 100%;
    padding: 0 12px;
    color: #45433f;
    font-size: 1.4rem;
    margin-bottom: 12px;
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 51px;
    width: 280px;
    border: 1px solid #aaa;
    background-color: #fff;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
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

  ${(p: Props) =>
    p.disabled &&
    css`
      background-color: #dcdcdc;

      color: #322f29;
      cursor: auto;
      :hover {
        background-color: #dcdcdc;
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
  @media (max-width: 800px) {
    flex-direction: column;
  }
  .groupStepTutorial {
    @media (max-width: 800px) {
      margin: 10px 0;
      img {
        width: 40px;
      }
    }
    display: flex;
    h2 {
      font-weight: 300;
      font-size: 1.8rem;
      line-height: 2.4rem;
      margin-left: 18px;
    }
  }
`
export const LoadingIcon = styled(CircularProgress)`
  && {
    color: #fff;
  }
`

export const SelectInput = styled(Select)`
  && {
    border-radius: 10px;
    margin-bottom: 12px;
    width: 100%;
    color: #45433f;
  }
`

export const Step3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0;

  .finishedSubscribe {
    padding: 15px 25px;
    border-radius: 5px;
    background-color: #3a8019;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    margin-top: 12px;
  }
  img {
    width: 150px;
  }
  h3 {
    margin-top: 10px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 10px;
    line-height: 1.6rem;
  }
  span {
    text-align: center;
    font-size: 0.8rem;
  }
  @media (max-width: 800px) {
    width: 100%;
    img {
      width: 250px;
    }
    h3 {
      font-size: 2.2rem;
      line-height: 3rem;
    }
    span {
      text-align: center;
      font-size: 1.2rem;
    }
    .finishedSubscribe {
      padding: 15px 25px;
      font-size: 1.6rem;
    }
  }
`
