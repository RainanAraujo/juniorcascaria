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
import stage from '../assets/stage.svg'
import schedule from '../assets/schedule.svg'
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
                  estarão disponíveis em breve! Confira nosso cronograma.
                </span>
                <ButtonGroup>
                  <Button onClick={() => setSchedulePopUp(true)}>
                    Cronograma
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        'https://firebasestorage.googleapis.com/v0/b/juniorcascaria-4fba1.appspot.com/o/LISTA%20DE%20DEFERIDOS%20TALENTOS%20DA%20TERRA.pdf?alt=media&token=49d0064c-b5e9-45a5-865c-36b11b6b72b9'
                      )
                    }
                    outlined={true}
                  >
                    Lista de inscritos
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
          <div className="wrapper"></div>
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
