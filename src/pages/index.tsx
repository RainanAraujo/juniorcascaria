import React from 'react'
import Link from 'next/link'
import {
  Container,
  Footer,
  Content,
  Header,
  WrapperOptions,
  Button,
  Background
} from '../styles/pages/Home'
import logoCascaria from '../assets/logoCascaria.svg'
import logoEvento from '../assets/logoEvento.svg'
const Home: React.FC = () => {
  return (
    <Container>
      <Background>
        <Header></Header>
        <Content>
          <img src={logoEvento} />

          <h1>
            Inscrições
            <b> 2 de Julho</b>
          </h1>
          <img src={logoCascaria} className="organization" />
          {/* <WrapperOptions>
          <div className="subscribeOpened">
            <h1>Inscrições abertas!</h1>
            <span>
              As inscrições do concurso <b>Talentos da Terra</b> ja esta
              disponível e estarão abertas até <b>18 de julho</b>. Clique no
              botão abaixo para inscrever-se.
            </span>
            <Link href="/talentosdaterra/register">
              <Button>Inscreva-se</Button>
            </Link>
          </div>
          <div className="divider"></div>
          <div className="subscribeCheck">
            <h1>Ja é inscrito?</h1>
            <span>
              Se você ja se inscreveu no nosso evento, clique no botão abaixo
              para acessar o comprovante de inscrição.
            </span>
            <Link href="/talentosdaterra/registrationVoucher">
              <Button outlined>Emitir Comprovante</Button>
            </Link>
          </div>
        </WrapperOptions> */}
        </Content>
        {/* <Footer>
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
      </Footer> */}
      </Background>
    </Container>
  )
}

export default Home
