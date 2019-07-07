import React from 'react'
import styled from 'styled-components'
import {pop} from './Animations'

const Bottomground = styled.footer`
  background-color: black;
  height: 10rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0.7;
  color: white;
  display: flex;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 2rem;
  & > h1 {
    font-size: 3rem;
  }
  & > h2 {
    font-size: 2rem;
    animation: ${pop} 0.3s ease-in-out;
  }
`


const Bottom = props => {

  return (
    <Bottomground>
      <Section>
        <h1>Up next:</h1>
        <h2>{props.upnext}</h2>
      </Section>
    </Bottomground>
  )
}

export default Bottom