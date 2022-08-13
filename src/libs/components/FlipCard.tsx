import styled, { keyframes } from 'styled-components'

import HomeScreenshot from 'res/FBHome.png'
import ValuationScreenshot from 'res/FBValuation.png'

const spin = keyframes`
    0% {
        transform: perspective(1000px) rotateY(0);
    }

    50% {
        transform: perspective(1000px) rotateY(180deg);
    }

    100% {
        transform: perspective(1000px) rotateY(360deg);
    }
`

const FlipCardDiv = styled.div`
    background-color: transparent;
`

const FlipInnerCardDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transform-style: preserve-3d;

    animation: ${spin} 8s;
    animation-iteration-count: infinite;
`

const FlipFrontCardDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    justify-content: center;
    align-items: center;
`

const FlipBackCardDiv = styled(FlipFrontCardDiv)`
    transform: rotateY(180deg);
`

const ScreenshotImg = styled.img`
    width: 280px;
    height: auto;
`

const FlipCard = () => {
    return (
        <FlipCardDiv>
            <FlipInnerCardDiv>
              <FlipFrontCardDiv>
                <ScreenshotImg src={HomeScreenshot}/>
              </FlipFrontCardDiv>
              <FlipBackCardDiv>
                <ScreenshotImg src={ValuationScreenshot}/>
              </FlipBackCardDiv>
            </FlipInnerCardDiv>
          </FlipCardDiv>
    )
}

export default FlipCard