import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Container,
  Footer,
  Content,
  Header,
  Button,
  ContentMain,
  WrapperContentMain,
  Description,
  Graphics,
  ContentSecond,
  BackgroundContentMain,
  ButtonGroup,
  ButtonLive
} from '../styles/pages/Home'
import logoCascaria from '../assets/logoCascaria.svg'
import logoEvento from '../assets/logoEvento.svg'
import recicle from '../assets/recicle.svg'
import imped from '../assets/imped.svg'
import stage from '../assets/stage.svg'
import schedule from '../assets/schedule.svg'
import alencarNet from '../assets/alencarNet.svg'
import posto from '../assets/posto.svg'
import selecteds from '../assets/selecteds.svg'
import surpCorreao from '../assets/surpCorreao.svg'
import PopUpImage from '../styles/components/PopUpImage'
import cascaria from '../assets/cascaria.svg'
import YouTube from 'react-youtube'
import { CascariaContent } from '../styles/pages/votacao'
const Home2: React.FC = () => {
  const [schedulePopUp, setSchedulePopUp] = useState(false)
  const [selectedPopUp, setSelectedPopUp] = useState(false)
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
      {schedulePopUp && (
        <PopUpImage image={schedule} onClose={() => setSchedulePopUp(false)} />
      )}
      {selectedPopUp && (
        <PopUpImage image={selecteds} onClose={() => setSelectedPopUp(false)} />
      )}

      <Header>
        <img src={logoCascaria} />
      </Header>
      <Content>
        <ContentMain>
          <BackgroundContentMain>
            <YouTube
              videoId="0_QAPH7PBWQ"
              opts={
                width > 800
                  ? { height: '490', width: '840' }
                  : { height: '190', width: '100%' }
              }
            />
            <img src={stage} className="stage" />
            {/* <WrapperContentMain>
              <Description>
                <h1>É Hoje! A grande live dos Talentos da Terra!</h1>
               <span>
                  Já estão disponíves a lista dos 12 classificados! Dia 26 de
                  outubro é nossa grande live. Venha prestigiar os talentos da
                  nossa terra!
                </span> 
                <ButtonGroup>
                  <img src={cascaria} />
                  <Link href="/talentosdaterra/vote">
                    <Button>Votar</Button>
                  </Link>
                </ButtonGroup>
              </Description>
              <Graphics>
                <img src={logoEvento} className="logo" />
                <img src={stage} className="stage" /> 
                <Link href="/talentosdaterra/live">
                  <ButtonLive>Assista a grande Live</ButtonLive>
                </Link>
              </Graphics>
            </WrapperContentMain> */}
          </BackgroundContentMain>
        </ContentMain>
        <ContentSecond>
          <ButtonGroup>
            <Button onClick={() => window.open('https://youtu.be/0_QAPH7PBWQ')}>
              Assistir no YouTube
            </Button>
          </ButtonGroup>
          <div className="wrapper">
            <h1>Apoio</h1>
            <div className="logoSponsorship">
              <img src={imped} />
              <img src={alencarNet} />
              <img src={posto} id="dalcotone" />
              <img src={surpCorreao} />
            </div>
          </div>
          <CascariaContent>
            <img src={cascaria} className="photo" />
            <img src={logoCascaria} className="logo" />
          </CascariaContent>
        </ContentSecond>
      </Content>

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
                @keracomunicacao
              </a>{' '}
            </b>
          </span>
        </div>
      </Footer>
    </Container>
  )
}

export default Home2
