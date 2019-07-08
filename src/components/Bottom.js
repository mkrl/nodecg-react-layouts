import React from 'react'
import styled from 'styled-components'
import transition from "styled-transition-group"
import Clock from 'react-live-clock'

const Bottomground = transition.section.attrs(() => ({
  unmountOnExit: true,
}))`
  background-color: black;
  height: 10rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0.7;
  color: white;
  display: flex;
  overflow: hidden;
  &:enter { opacity: 0.01; }
  &:enter-active {
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }
  &:exit { opacity: 0; }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 0.3s ease-in;
  }
`
const Section = styled.div`
  flex-grow: ${props => props.grow ? props.grow  : "unset" };
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
  }
  & > img {
    max-heigt: 300px;
  }
`


const Bottom = props => {

  const Logo = (logoArray) => {
    if (props.logo) {
      return <img src={props.logo[0].url}/>
    } else {
      return null
    }
  }

  return (
    <Bottomground in={true} timeout={1000}>
      <Section>
        <h1>Up next</h1>
        <h2>{props.upnext}</h2>
      </Section>
      <Section grow={2}>
        <h1>Local Time</h1>
        <h2>
         <Clock format={'HH:mm:ss'} ticking={true} />
        </h2>
      </Section>   
      <Section>
        <Logo/>
      </Section>
    </Bottomground>
  )
}

export default Bottom