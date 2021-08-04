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
import dalcotone from '../assets/dalcotone.svg'
import posto from '../assets/posto.svg'
import surpCorreao from '../assets/surpCorreao.svg'
import PopUpImage from '../styles/components/PopUpImage'

const Home2: React.FC = () => {
  const [schedulePopUp, setSchedulePopUp] = useState(false)

  return (
    <Container>
      {schedulePopUp && (
        <PopUpImage image={schedule} onClose={() => setSchedulePopUp(false)} />
      )}

      <Header>
        <img src={logoCascaria} />
      </Header>
      <Content>
        <ContentMain>
          <BackgroundContentMain>
            <WrapperContentMain>
              <Description>
                <h1>Vem ai, o maior concurso musical do ano!</h1>
                <span>
                  A lista dos inscritos e o resultado dos 12 selecionados
                  estarão disponíveis em breve! Confira a lista de todos
                  deferidos.
                </span>
                <ButtonGroup>
                  <Button
                    onClick={() =>
                      window.open(
                        'https://firebasestorage.googleapis.com/v0/b/juniorcascaria-4fba1.appspot.com/o/LISTA%20DE%20DEFERIDOS%20TALENTOS%20DA%20TERRA.pdf?alt=media&token=49d0064c-b5e9-45a5-865c-36b11b6b72b9'
                      )
                    }
                  >
                    Lista de inscritos
                  </Button>
                  <Button
                    onClick={() => setSchedulePopUp(true)}
                    outlined={true}
                  >
                    Cronograma
                  </Button>
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
              <img src={recicle} />
              <img src={imped} />
              <img src={dalcotone} />
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
