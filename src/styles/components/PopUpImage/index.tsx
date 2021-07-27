import React from 'react'

import { Container, Content, IconClose } from './styles'

interface Props {
  onClose: any
  image: any
}

const PopUpImage: React.FC<Props> = ({ onClose, image }: Props) => {
  return (
    <Container onClick={onClose}>
      <Content>
        <img src={image} />
        <button onClick={onClose}>
          <IconClose />
        </button>
      </Content>
    </Container>
  )
}

export default PopUpImage
