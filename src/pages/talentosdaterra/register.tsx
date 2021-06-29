import React, { useState } from 'react'
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
const Register: React.FC = () => {
  const [statusStep, setStatusStep] = useState(1)

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
            Adicione seus dados
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
            <Input />
            <label>Nome Artístico</label>
            <Input />
            <label>CPF</label>
            <Input />
            <label>Cidade</label>
            <select id="" name="musicalComposition">
              <option value="solo" disabled selected>
                Selecione sua cidade
              </option>
            </select>
            <div className="address">
              <div className="groupDistrict">
                <label>Bairro</label>
                <Input />
              </div>
              <div className="groupNumber">
                <label>Número</label>
                <Input />
              </div>
            </div>
            <label>Complemento</label>
            <Input />

            <Button onClick={() => setStatusStep(2)}>Continuar</Button>
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
              <Input />
              <ButtonGroup>
                <Button outlined={true} onClick={() => setStatusStep(1)}>
                  Voltar
                </Button>
                <div />
                <Button onClick={() => setStatusStep(3)}>Finalizar</Button>
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
