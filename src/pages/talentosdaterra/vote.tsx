import React, { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Container,
  Content,
  Header,
  Footer,
  ParticipantsContainer,
  ButtonParticipant,
  PopUpVoting,
  Button
} from '../../styles/pages/votacao'
import logoCascaria from '../../assets/logoCascaria.svg'
import { candidates } from '../../assets/candidates'
import ReactLoading from 'react-loading'

import { X } from 'react-feather'

const Votacao: React.FC = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState(-1)
  const REGISTER_VOTE_URL =
    'https://us-central1-juniorcascaria-4fba1.cloudfunctions.net/registerVote'
  const PUBLIC_KEY = '6Lfvx2AbAAAAAEsb-asgEwig6gRye5T7IdFCPIny'
  const [voteConfirmed, setVoteConfirmed] = useState(false)
  const [loading, setLoading] = useState(false)

  async function submit(token: string) {
    try {
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
        if (rawResponse.status !== 200) {
          throw new Error(content?.error)
        }
        const storageID = 'candidate_' + selectedCompetitor
        const localCount = parseInt(localStorage.getItem(storageID) || '0')
        localStorage.setItem(storageID, (localCount + 1).toString())
        location.replace(
          '/talentosdaterra/votefinished?selected=' + selectedCompetitor
        )
      }
    } catch (err) {
      if (err?.message === 'vote closed') {
        alert('Votação encerrada')
        setSelectedCompetitor(-1)
      } else {
        alert('Erro: não foi possível efetuar o voto, Tente novamente')
        location.reload()
      }
      console.log(err)
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
                onClick={() => (
                  // eslint-disable-next-line no-sequences
                  setSelectedCompetitor(index), setVoteConfirmed(false)
                )}
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
          <div className="close">
            <X
              color="#8d8d8d"
              size={22}
              onClick={() => setSelectedCompetitor(-1)}
            />
          </div>
          {!loading ? (
            <>
              {' '}
              {!voteConfirmed ? (
                <>
                  <p>
                    Você selecionou{' '}
                    <b>
                      {candidates.map(
                        (item, index) =>
                          selectedCompetitor === index && item.name
                      )}
                    </b>
                    , para votar clique no botão abaixo:
                  </p>
                  <Button onClick={() => setVoteConfirmed(true)}>
                    Confirmar
                  </Button>
                </>
              ) : (
                <>
                  <p>Precisamos verificar que você não é um robô</p>
                  <ReCAPTCHA
                    sitekey={PUBLIC_KEY}
                    // eslint-disable-next-line no-sequences
                    onChange={token => (submit(token || ''), setLoading(true))}
                    size="compact"
                  />
                </>
              )}
            </>
          ) : (
            <>
              <p>
                Caso ocorra algum erro, pode ser devido o grande fluxo de
                pessoas votando simultaneamente.
              </p>
              <ReactLoading
                type={'spin'}
                color={'#E0D394'}
                height={30}
                width={30}
              />
              <h1>Processando voto...</h1>
            </>
          )}
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
