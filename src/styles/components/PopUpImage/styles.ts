import styled, { css, keyframes } from 'styled-components'
import { X } from 'react-feather'

const openPopUp = keyframes`
  0%   {transform: scale(0);}
  100% {transform: scale(1);}
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 5;

  background-color: #00000050;
`

export const Content = styled.div`
  animation: ${openPopUp} 0.2s normal ease-in;
  position: relative;
  border-radius: 10px;
  margin: auto;
  background-color: #fff;

  height: 90%;
  @media (max-width: 800px) {
    width: 90%;
    height: auto;
  }
  img {
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 100%;
  }
  button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
  }
`
export const IconClose = styled(X)`
  color: #fff;
`
