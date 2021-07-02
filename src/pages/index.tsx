import React from 'react'
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
  BackgroundContentMain
} from '../styles/pages/Home'
import logoCascaria from '../assets/logoCascaria.svg'
import logoEvento from '../assets/logoEvento.svg'
import stage from '../assets/stage.svg'
const Home2: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logoCascaria} />
      </Header>
      <Content>
        <ContentMain>
          <BackgroundContentMain>
            <WrapperContentMain>
              <Description>
                <h1>Participe do maior concurso musical do ano!</h1>
                <span>
                  As inscrições do concurso <b>Talentos da Terra</b> ja estão
                  disponíveis. Clique no botão abaixo e participe!
                </span>
                <Link href="/talentosdaterra/register">
                  <Button>Quero Participar</Button>
                </Link>
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
