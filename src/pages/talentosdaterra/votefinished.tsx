import React, { useState, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Container,
  Content,
  Header,
  Footer,
  PopUpVoting,
  Button,
  ContentVoteAgain,
  CascariaContent
} from '../../styles/pages/votacao'
import ReactLoading from 'react-loading'
import cascaria from '../../assets/cascaria.svg'
import logoCascaria from '../../assets/logoCascaria.svg'
import { candidates } from '../../assets/candidates'
import { X } from 'react-feather'

const VoteFinished: React.FC = () => {
  const REGISTER_VOTE_URL =
    'https://us-central1-juniorcascaria-4fba1.cloudfunctions.net/registerVote'
  const PUBLIC_KEY = '6Lfvx2AbAAAAAEsb-asgEwig6gRye5T7IdFCPIny'
  const [token, setToken] = useState()
  const [openVote, setOpenVote] = useState(false)
  const [selectedCompetitor, setSelectedCompetitor] = useState(-1)
  const [voteConfirmed, setVoteConfirmed] = useState(false)
  const [voteCount, setVoteCount] = useState(1)
  const [loading, setLoading] = useState(false)

  function onChange(value: any) {
    setToken(value)
    console.log('Captcha value:', value)
  }

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
        setLoading(false)
        setVoteConfirmed(false)
        setOpenVote(false)
        const storageID = 'candidate_' + selectedCompetitor
        const localCount = parseInt(localStorage.getItem(storageID) || '0')
        localStorage.setItem(storageID, (localCount + 1).toString())
        setVoteCount(localCount + 1)
      }
    } catch (err) {
      if (err?.message === 'vote closed') {
        alert('Votação encerrada')
        setLoading(false)
        setVoteConfirmed(false)
        setOpenVote(false)
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

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    if (urlParams.has('selected')) {
      const candidateIndex = parseInt(urlParams.get('selected') || '-1')
      setSelectedCompetitor(candidateIndex)
      const storageID = 'candidate_' + candidateIndex
      const localCount = parseInt(localStorage.getItem(storageID) || '0')
      setVoteCount(localCount)
    } else {
      location.replace('/talentosdaterra/vote')
    }
  }, [])

  return (
    <Container>
      <Header></Header>
      <Content>
        <ContentVoteAgain>
          <h1>
            <b>Você votou em</b>
          </h1>
          <img src={candidates[selectedCompetitor]?.avatar} />
          <span>{candidates[selectedCompetitor]?.name}</span>
          <h3>{voteCount} vezes consecutivas!</h3>
          <Button onClick={() => setOpenVote(true)}>Votar Novamente</Button>
        </ContentVoteAgain>
      </Content>
      <CascariaContent>
        <img src={cascaria} className="photo" />
        <img src={logoCascaria} className="logo" />
      </CascariaContent>
      {openVote && (
        <PopUpVoting>
          <div className="close">
            <X color="#8d8d8d" size={22} onClick={() => setOpenVote(false)} />
          </div>
          {!loading ? (
            <>
              <p>Precisamos verificar que você não é um robô</p>
              <ReCAPTCHA
                sitekey={PUBLIC_KEY}
                // eslint-disable-next-line no-sequences
                onChange={token => (submit(token || ''), setLoading(true))}
                size="compact"
              />
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

export default VoteFinished
