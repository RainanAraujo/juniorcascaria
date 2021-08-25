import React, { useState } from 'react'
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
  ButtonGroup
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

const Home2: React.FC = () => {
  const [schedulePopUp, setSchedulePopUp] = useState(false)
  const [selectedPopUp, setSelectedPopUp] = useState(false)
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
            <WrapperContentMain>
              <Description>
                <h1>A votação está aberta. Escolha seu Talento!</h1>
                {/* <span>
                  Já estão disponíves a lista dos 12 classificados! Dia 26 de
                  outubro é nossa grande live. Venha prestigiar os talentos da
                  nossa terra!
                </span> */}
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
              </Graphics>
            </WrapperContentMain>
          </BackgroundContentMain>
        </ContentMain>
        <ContentSecond>
          <div className="wrapper">
            <h1>Apoio</h1>
            <div className="logoSponsorship">
              <img src={imped} />
              <img src={alencarNet} />
              <img src={posto} id="dalcotone" />
              <img src={surpCorreao} />
            </div>
          </div>
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
