import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Container,
  Content,
  Header,
  Footer,
  ParticipantsContainer,
  ButtonParticipant,
  PopUpVoting
} from '../../styles/pages/votacao'

import adoniran from '../../assets/adoniran.svg'
import adryanSilva from '../../assets/adryanSilva.svg'
import breno from '../../assets/breno.svg'
import claudiaAndrade from '../../assets/claudiaAndrade.svg'
import danielCosta from '../../assets/danielCosta.svg'
import dilzaSiqueira from '../../assets/dilzaSiqueira.svg'
import gilly from '../../assets/gilly.svg'
import giovanne from '../../assets/giovanne.svg'
import isadora from '../../assets/isadora.svg'
import jessica from '../../assets/jessica.svg'
import rayanne from '../../assets/rayanne.svg'
import rony from '../../assets/rony.svg'
import logoCascaria from '../../assets/logoCascaria.svg'
const Votacao: React.FC = () => {
  const [token, setToken] = useState()
  const [selectedCompetitor, setSelectedCompetitor] = useState('')
  const PUBLIC_KEY = '6Lfvx2AbAAAAAEsb-asgEwig6gRye5T7IdFCPIny'
  const candidates = [
    { name: 'Adoniran Judson', city: 'Codó', avatar: adoniran },
    { name: 'Adryan Silva', city: 'Poção de Pedras', avatar: adryanSilva },
    { name: 'Breno Borges', city: 'Esperantinópolis', avatar: breno },
    {
      name: 'Cláudia Andrade',
      city: 'Barra do Corda',
      avatar: claudiaAndrade
    },
    { name: 'Daniel Costa', city: 'Presidente Dutra', avatar: danielCosta },
    { name: 'Dilza SIqueira', city: 'Pedreiras', avatar: dilzaSiqueira },
    { name: 'Gilly Araújo', city: 'Lago da Pedra', avatar: gilly },
    { name: 'Giovanne', city: 'Santa Luzia', avatar: giovanne },
    {
      name: 'Isadora Mendonça',
      city: 'São Raimundo do Doca Bezerra',
      avatar: isadora
    },
    { name: 'Jéssica Catanhede', city: 'Codó', avatar: jessica },
    {
      name: 'Rayanne Gabrielle',
      city: "Olho D'agua das Cunhãs",
      avatar: rayanne
    },
    { name: 'Ronny Oliveira', city: 'Igarapé Grande', avatar: rony }
  ]

  function onChange(value: any) {
    setToken(value)
    console.log('Captcha value:', value)
  }

  async function submit() {
    console.log(selectedCompetitor, token)
    if (selectedCompetitor != null && token != null) {
      const rawResponse = await fetch(location.origin + '/api/vote', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          competitorID: selectedCompetitor,
          recaptchaToken: token
        })
      })
      const content = await rawResponse.json()
      console.log(content)
    } else {
      alert('invalid request')
    }
  }

  return (
    <Container>
      <Header>
        <img src={logoCascaria} />
      </Header>
      <Content>
        <h1>
          <b>Escolha seu Talento</b>
        </h1>
        <span>
          A sua votação em cada candidato é contabilizada como 1 voto e pode ser
          realizada quantas vezes você quiser.
        </span>
        <ParticipantsContainer>
          {candidates.map((item, index) => {
            return (
              <ButtonParticipant
                key={index}
                selected={selectedCompetitor === item.name}
                onClick={() => setSelectedCompetitor(item.name)}
              >
                <div className="description">
                  <h2>{item.name}</h2>
                  <h3>{item.city}</h3>
                </div>
                <img src={item.avatar} />
              </ButtonParticipant>
            )
          })}
        </ParticipantsContainer>
      </Content>
      {selectedCompetitor !== '' && (
        <PopUpVoting>
          <p>Precisamos verificar que você não é um robô</p>
          <ReCAPTCHA sitekey={PUBLIC_KEY} onChange={onChange} size="compact" />
          {/* <button onClick={submit}>SUBMIT</button> */}
        </PopUpVoting>
      )}

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

export default Votacao
