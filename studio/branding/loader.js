import React from 'react'
import styled from 'styled-components'

const Loader = ({ text = 'Loading...' }) => {
  return (
    <LoadingScreen>
      <LoadingScreenContent>
        <LoadingScreenIcon>
        <svg width="301" height="151" viewBox="0 0 301 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.741 148.621H33.978V66.509H16.9V148.6H0.117996V0H16.884V51.518H33.944V0.013H50.744L50.741 148.621Z" fill="black"/>
<path d="M147.782 148.6H131V-0.000152588H147.766L147.782 148.6Z" fill="black"/>
<path d="M164.25 66.5088L147.782 66.5089L173.734 31.9999H190.5L164.25 66.5088Z" fill="black"/>
<path d="M190.5 31.9999H173.734L147.766 -0.000152588L164.25 -0.000146866L190.5 31.9999Z" fill="black"/>
<path d="M116.358 148.622H99.609V138.852L82.956 148.626L65.722 138.756V52.5H82.5V129.217L99.581 138.617L99.609 52.5H116.358V148.622Z" fill="black"/>
<path d="M179.052 147.112L147.5 66.4345L164.001 66.4345L192.323 135.282L213.007 129.799L205.422 140.182L179.052 147.112Z" fill="black"/>
<path d="M232.782 148.6H216V0H232.766L232.782 148.6Z" fill="black"/>
<path d="M249.25 66.509L232.782 66.509L258.734 32H275.5L249.25 66.509Z" fill="black"/>
<path d="M275.5 32H258.734L232.766 0L249.25 5.72205e-06L275.5 32Z" fill="black"/>
<path d="M264.052 147.113L232.5 66.4347L249.001 66.4346L277.323 135.282L298.007 129.799L290.422 140.182L264.052 147.113Z" fill="black"/>
</svg>

        </LoadingScreenIcon>
        <p>{text}</p>
      </LoadingScreenContent>
    </LoadingScreen>
  )
}

const LoadingScreen = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-align: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #000000;
  color: #f4f4f0;
`

const LoadingScreenContent = styled.div`
  margin: auto;

  p {
    margin-top: 2rem;
    font-size: 13px;
    font-weight: 600;
  }
`

const LoadingScreenIcon = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 6rem;

  svg {
    display: block;
    width: 100%;
    max-width: none;
    height: auto;
    fill: currentColor;
  }
`

export default Loader
