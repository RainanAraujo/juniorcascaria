import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const Votes: React.FC = () => {
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
    <div>
      <ReCAPTCHA sitekey={PUBLIC_KEY} onChange={onChange} />
      <button onClick={submit}>SUBMIT</button>
    </div>
  )
}

export default Votes
