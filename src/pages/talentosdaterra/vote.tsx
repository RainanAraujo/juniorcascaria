import React, { useEffect, useState } from 'react'
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
  const [selectedCompetitor, setSelectedCompetitor] = useState(-1)
  const REGISTER_VOTE_URL =
    'https://us-central1-juniorcascaria-4fba1.cloudfunctions.net/registerVote'
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

  async function submit(token: string) {
    if (selectedCompetitor >= -1 && token.length > 0) {
      const rawResponse = await fetch(REGISTER_VOTE_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          candidate: selectedCompetitor,
          voterID: getVoterID(),
          recaptchaToken: token
        })
      })
      const content = await rawResponse.json()
      console.log(content)
    } else {
      alert('invalid request')
    }
  }

  const getVoterID = () => {
    let voterID = localStorage.getItem('voterID')
    if (!voterID) {
      voterID =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      localStorage.setItem('voterID', voterID)
    }
    return voterID
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
                selected={selectedCompetitor === index}
                onClick={() => setSelectedCompetitor(index)}
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
      {selectedCompetitor >= 0 && (
        <PopUpVoting>
          <p>Precisamos verificar que você não é um robô</p>
          <ReCAPTCHA
            sitekey={PUBLIC_KEY}
            onChange={token => submit(token || '')}
            size="compact"
          />
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
