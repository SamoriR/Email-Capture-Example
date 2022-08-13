import React, { useRef } from 'react'
import styled from 'styled-components'

import FlipCard from 'libs/components/FlipCard'

const emailRegExPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-z.]{2,6}$"

/**********************************
  Styled Components
**********************************/
const MainDiv = styled.div`
  	max-width: 100%;
`

const FullScreenDiv = styled.div`
	display: flex;

	height: 100vh;
	width: 100%;
	min-width: 300px;
	background-Color: black;

	justify-content: center;
	align-items: center;
	text-align: center;

	flex-direction: column;  
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

const ColumnContentDiv = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;

	text-align: center;
	justify-content: center;

	@media (max-width: 768px) {
		padding-top: 30%;
	}

	@media (max-width: 384px) {
		padding-top: 40%;
	}
`

const RowContentDiv = styled.div`
	display: flex;
	flex-direction: row;

	width: 100%;
	height: 100%;
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

const ScreenshotDiv = styled.div`
	width: 100%;

	padding-top: 10%;

	overflow: hidden;
	text-align: center;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		height: 300px;
	}
`



/**********************************
  Main App
**********************************/
const App = () => {
	const emailRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

	const onSubmitButtonClick = (): void => {
		if (emailRef !== null && emailRef.current !== null) {
			const email: string = emailRef.current.value
			const regExCondition: RegExp = new RegExp(emailRegExPattern, 'g')
			const fEmailIsValid: boolean = regExCondition.test(email)

			if (fEmailIsValid) {
				alert('Dev: Valid Email Used')
			}
    	} 
  	}

	const onEmailInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			onSubmitButtonClick();
		}
	}

	return (
		<MainDiv>
			<FullScreenDiv>
				<RowContentDiv>
					<ColumnContentDiv>
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
					</ColumnContentDiv>

					<ScreenshotDiv>
						<FlipCard/>
					</ScreenshotDiv>

				</RowContentDiv>
			</FullScreenDiv>
		</MainDiv>
	)
}

export default App;
