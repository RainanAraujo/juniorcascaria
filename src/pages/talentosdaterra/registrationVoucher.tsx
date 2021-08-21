import React from 'react'
import Link from 'next/link'
import {
  Container,
  Content,
  Header,
  Footer,
  Input,
  Button
} from '../../styles/pages/votacao'

const Home: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <h1>Acessar comprovante de inscrição</h1>
        <span>Adicione o CPF do usuário cadastrado em sua inscrição.</span>
        <div className="form">
          <label>CPF</label>
          <Input />
        </div>
        <Button>Emitir Comprovante</Button>
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
                KERA
              </a>{' '}
            </b>
          </span>
        </div>
      </Footer>
    </Container>
  )
}

export default Home
