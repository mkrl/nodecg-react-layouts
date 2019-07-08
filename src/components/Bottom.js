import React from 'react'
import styled from 'styled-components'
import Clock from 'react-live-clock'
import SponsorLogos from './SponsorLogos'

const Bottomground = styled.section`
  background-color: #000000c2;
  height: 10rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
`
const Section = styled.div`
  flex-grow: ${props => props.grow ? props.grow  : "unset" };
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 100%;
  padding: 0 2rem;
  min-width: 400px;
  
  & > h1 {
    font-size: 3rem;
  }
  & > h2 {
    font-size: 2rem;
  }
  & > img {
    max-height: 300px;
  }
`


const Bottom = props => {

  const Logo = () => {
    if (props.logo) {
      if (props.logo.length > 0) {
        return (
          <Section>
            <img src={props.logo[0].url}/>
          </Section>
        )
      } else { return null }
    } else {
      return null
    }
  }

  const Sponsors = () => {
    if (props.sponsorLogos) {
      if (props.sponsorLogos.length > 0) {
        return (
          <Section>
            <SponsorLogos logoArray={props.sponsorLogos}/>
          </Section>
        )
      } else { return null }
    } else {
      return null
    }
  }

  return (
    <Bottomground>
      <Section>
        <h1>Up next</h1>
        <h2>{props.upnext}</h2>
      </Section>
      <Section>
        <h1>Local Time</h1>
        <h2>
         <Clock format={'HH:mm:ss'} ticking={true} />
        </h2>
      </Section>
      <Logo />
      <Sponsors />
    </Bottomground>
  )
}

export default Bottom