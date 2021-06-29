import React, { useState, useCallback, useEffect } from 'react'
import {
  Container,
  Header,
  Content,
  Footer,
  Steps,
  DescriptionsGroup,
  ContentDescription,
  ListIcon,
  CardIcon,
  VideoIcon,
  ProgressSteps,
  ProgressBar,
  CurrentProgressBar,
  Input,
  Form,
  Button,
  Tutorial,
  ButtonGroup
} from '../../styles/pages/Register'
import tutorialVideo1 from '../../assets/tutorialVideo1.svg'
import tutorialVideo3 from '../../assets/tutorialVideo3.svg'

import Autosuggest from 'react-autosuggest'
import cities from '../../assets/cities.json'
import { registerCompetitor } from '../../../services/firestore'
import firebase from '../../../services/firebase'

const Register: React.FC = () => {
  const [valideForm, setValideForm] = useState(false)
  const [statusStep, setStatusStep] = useState(1)
  const [fullName, setFullName] = useState('')
  const [artisticName, setArtisticName] = useState('')
  const [CPF, setCPF] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')
  const [addressNumber, setAddressNumber] = useState('')
  const [addressDetails, setAddressDetails] = useState('')
  const [videoURL, setVideoURL] = useState('')

  const [suggestions, setSuggestions] = useState([] as string[])

  function validURL(str: string) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }

  function validateCpf(inputCPF: string) {
    var soma = 0
    var resto

    if (inputCPF == '00000000000') return false
    for (let i = 1; i <= 9; i++)
      soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i)
    resto = (soma * 10) % 11

    if (resto == 10 || resto == 11) resto = 0
    if (resto != parseInt(inputCPF.substring(9, 10))) return false

    soma = 0
    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i)
    resto = (soma * 10) % 11

    if (resto == 10 || resto == 11) resto = 0
    if (resto != parseInt(inputCPF.substring(10, 11))) return false
    return true
  }

  useEffect(() => {
    if (
      ![
        fullName,
        artisticName,
        CPF,
        phoneNumber,
        city,
        district,
        addressNumber,
        addressDetails
      ].some(str => str === '') &&
      validateCpf(CPF)
    ) {
      setValideForm(true)
    } else {
      setValideForm(false)
    }
  }, [
    fullName,
    artisticName,
    CPF,
    phoneNumber,
    city,
    district,
    addressNumber,
    addressDetails
  ])

  function onSuggestionsFetchRequested({ value }: any) {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    const suggestion =
      inputLength === 0
        ? ([] as string[])
        : cities
            .filter(
              city => city.toLowerCase().slice(0, inputLength) === inputValue
            )
            .slice(0, 5)

    setSuggestions(suggestion)
  }

  const renderSuggestion = (suggestion: any) => <div>{suggestion}</div>

  return (
    <Container>
      <Header></Header>
      <Content>
        <Steps>
          <DescriptionsGroup>
            <ContentDescription statusStep={statusStep}>
              <ListIcon size={30} />
              <h2 className="step1">Dados</h2>
            </ContentDescription>
            <ContentDescription statusStep={statusStep}>
              <VideoIcon statusStep={statusStep} size={30} />
              <h2 className="step2">Upload Video</h2>
            </ContentDescription>
            <ContentDescription statusStep={statusStep}>
              <CardIcon statusStep={statusStep} size={30} />
              <h2 className="step3">Finalização</h2>
            </ContentDescription>
          </DescriptionsGroup>
          <ProgressSteps>
            <ProgressBar>
              <CurrentProgressBar statusStep={statusStep}></CurrentProgressBar>
            </ProgressBar>
          </ProgressSteps>
        </Steps>
        {statusStep == 1 && (
          <h1>
            Adicione seus dados -{valideForm.toString()}-
            <br />
            <b>Pessoais e Artísticos</b>
          </h1>
        )}
        {statusStep == 2 && (
          <h1>
            Grave um video para
            <br />
            <b>Seu Instagram</b>
          </h1>
        )}

        {statusStep == 1 && (
          <Form>
            <label>Composição Musical</label>
            <select id="" name="musicalComposition">
              <option value="solo">Solo</option>
              <option value="dueto">Dueto</option>
            </select>
            <label className="info">
              Caso você cante com outras pessoas, será necessário as informações
              de apenas um representante.
            </label>
            <label>Nome Completo</label>
            <Input
              value={fullName}
              onChange={evt => setFullName(evt.target.value)}
            />
            <label>Nome Artístico</label>
            <Input
              value={artisticName}
              onChange={evt => setArtisticName(evt.target.value)}
            />
            <label>CPF</label>
            <Input value={CPF} onChange={evt => setCPF(evt.target.value)} />
            <label>Telefone (Whatsapp)</label>
            <Input
              value={phoneNumber}
              onChange={evt => setPhoneNumber(evt.target.value)}
            />
            <label>Cidade</label>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={() => setSuggestions([])}
              getSuggestionValue={suggestion => suggestion}
              renderSuggestion={renderSuggestion}
              inputProps={{
                placeholder: 'Digite sua Cidade',
                value: city,
                onChange: (evt: any, value: any) => setCity(value.newValue)
              }}
            />
            <div className="address">
              <div className="groupDistrict">
                <label>Bairro</label>
                <Input
                  value={district}
                  onChange={evt => setDistrict(evt.target.value)}
                />
              </div>
              <div className="groupNumber">
                <label>Número</label>
                <Input
                  value={addressNumber}
                  onChange={evt => setAddressNumber(evt.target.value)}
                />
              </div>
            </div>
            <label>Complemento</label>
            <Input
              value={addressDetails}
              onChange={evt => setAddressDetails(evt.target.value)}
            />

            <Button disabled={!valideForm} onClick={() => setStatusStep(2)}>
              Continuar
            </Button>
          </Form>
        )}
        {statusStep == 2 && (
          <>
            <Tutorial>
              <div className="groupStepTutorial">
                <img src={tutorialVideo1} />
                <h2>
                  Grave um breve <br /> video mostrando <br /> seu talento.
                </h2>
              </div>
              <div className="groupStepTutorial">
                <img src={tutorialVideo3} />
                <h2>
                  O video deve iniciar com a <br /> frase “Video para o <br />
                  concurso talentos da terra”.
                </h2>
              </div>
              <div className="groupStepTutorial">
                <img src={tutorialVideo3} />
                <h2>Publique seu video no seu Instagram.</h2>
              </div>
            </Tutorial>
            <Form>
              <label className="center">
                Adicione aqui o link de sua publicação
              </label>
              <Input
                value={videoURL}
                onChange={evt => setVideoURL(evt.target.value)}
              />
              <ButtonGroup>
                <Button outlined={true} onClick={() => setStatusStep(1)}>
                  Voltar
                </Button>
                <div />
                <Button
                  disabled={!validURL(videoURL)}
                  onClick={async () => {
                    firebase.auth().signInAnonymously()
                    await registerCompetitor(
                      fullName,
                      artisticName,
                      CPF,
                      phoneNumber,
                      videoURL,
                      {
                        city,
                        district,
                        addressNumber,
                        details: addressDetails
                      }
                    )
                    setStatusStep(3)
                  }}
                >
                  Finalizar
                </Button>
              </ButtonGroup>
            </Form>
          </>
        )}
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

export default Register
