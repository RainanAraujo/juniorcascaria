import React, { useState, useEffect } from 'react'
import {
  Container,
  Content,
  Header,
  Footer,
  Button,
  ButtonGroup
} from '../../styles/pages/Live'
import logoCascaria from '../../assets/logoCascaria.svg'
import cascaria from '../../assets/cascaria.svg'

import YouTube from 'react-youtube'
import { CascariaContent } from '../../styles/pages/votacao'
import Link from 'next/link'

const Live: React.FC = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <Container>
      <Header>
        <img src={logoCascaria} />
      </Header>
      <Content>
        <h1>
          Prestigiem a grande <br />
          <b>Live Talentos da Terra</b>
        </h1>
        <YouTube
          videoId="0_QAPH7PBWQ"
          opts={
            width > 800
              ? { height: '490', width: '840' }
              : { height: '190', width: '100%' }
          }
        />
        <ButtonGroup>
          <Button
            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=0_QAPH7PBWQ&feature=youtu.be'
              )
            }
          >
            Assistir no YouTube
          </Button>

          <Link href="/talentosdaterra/vote">
            <Button outlined={true}>Vote no seu talento</Button>
          </Link>
        </ButtonGroup>
      </Content>
      <CascariaContent>
        <img src={cascaria} className="photo" />
        <img src={logoCascaria} className="logo" />
      </CascariaContent>
      <Footer>
        <div>
          <span>© 2021 Todos os direitos reservados</span>
          <span>
            Produzido por{' '}
            <b>
              <a
                onClick={() =>
                  window.open('https://www.instagram.com/keracomunicacao/')
                }
              >
                KERA
              </a>{' '}
            </b>
          </span>
        </div>
      </Footer>
    </Container>
  )
}

export default Live
