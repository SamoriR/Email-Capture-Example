import React, { useRef } from 'react';
import styled from 'styled-components';
import Screenshot from '../assets/FeedbackScreen.png'

const emailRegExPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-z.]{2,6}$"



/**********************************
  Styled Components
**********************************/
const MainDiv = styled.div`
  max-width: 100%;
`

const FullScreenDiv = styled.div`
  display: flex;
  flex-direction: column;  

  height: 100vh;
  width: 100%;
  min-width: 300px;
  background-Color: black;

  justify-content: space-between;
  align-items: center;
  text-align: center;
`

const TitleP = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 110px;
  font-weight: bold;
  color: #FFEEDD;
  letter-spacing: 3.38px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 70px;
  }

  @media (max-width: 384px) {
    font-size: 50px;
  }
`

const PeriodP = styled(TitleP)`
  color: red;
`

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
`

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  text-align: center;
  padding-top: 160px;
  padding-bottom: 80px;
`

const FormDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding-Left: 20px;
    padding-Right: 20px;
    flex-direction: column;
  }
`

const EmailInput = styled.input`
  background-Color: transparent;
  border-Top: none;
  border-Left: none;
  border-Right: none;
  border-Bottom-style: solid;
  border-Bottom-Color: #BFC0C5; 
  color: white;
  width: 260px;
  margin-right: 28px;
  outline: none;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`

const SubmitButton = styled.button`
  background: #1F1E1E;
  border-radius: 27px;
  padding: 8px;
  color: white;
  border: none;
  display: block;
  width: 120px;
  outline: none;

  @media (max-width: 768px) {
    margin-top: 28px;
  }
`

const ScreenshotImg = styled.img`
  width: 280px;
  height: auto;
`

const ScreenshotDiv = styled.div`
  width: 100%;
  height: 300px;
  bottom: 0;
  overflow: hidden;
`



/**********************************
  Main App
**********************************/
function App() {
  const emailRef = useRef<HTMLInputElement>(null)

  const onSubmitButtonClick = () => {
    if (emailRef !== null && emailRef.current !== null){
      const regExCondition = new RegExp(emailRegExPattern, 'g')
      const fEmailIsValid = regExCondition.test(emailRef.current.value)

      if (fEmailIsValid) {
        // DO SOMETHING
      } else {
        alert('Please use a valid email')
      }
    } 
  }

  const onEmailInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event)
    if (event.charCode === 13) {
      event.preventDefault();
      onSubmitButtonClick();
    }
  }

  return (
    <MainDiv>
      <FullScreenDiv>
        <ContentDiv>
          <TitleDiv>
            <TitleP>Feedback</TitleP>
            <PeriodP>.</PeriodP>
          </TitleDiv>
          
          <FormDiv>
            <EmailInput
              type="email"
              placeholder="Email Address"
              ref={emailRef}
              onKeyPress={onEmailInputKeyPress}/>
            <SubmitButton onClick={onSubmitButtonClick}> Get Early Access </SubmitButton>
          </FormDiv>
        </ContentDiv>

        <ScreenshotDiv>
          <ScreenshotImg src={Screenshot}/>
        </ScreenshotDiv>
      </FullScreenDiv>
    </MainDiv>
  );
}

export default App;
