import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Container,
  Content,
  Header,
  Footer,
  PopUpVoting
} from '../../styles/pages/votacao'

import logoCascaria from '../../assets/logoCascaria.svg'
const VotateFinished: React.FC = () => {
  const [token, setToken] = useState()
  const [selectedCompetitor, setSelectedCompetitor] = useState('')
  const PUBLIC_KEY = '6Lfvx2AbAAAAAEsb-asgEwig6gRye5T7IdFCPIny'

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
          <b>Você votou em</b>
        </h1>
        <span>NOme do cara</span>
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

export default VotateFinished