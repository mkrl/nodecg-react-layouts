import React from 'react'
import styled from 'styled-components'
import colors from '../config/colors'
import variables from '../config/variables'
import pattern from '../assets/pattern'
import Clock from 'react-live-clock'
import SponsorLogos from './SponsorLogos'

const Bottomground = styled.section`
  background-color: ${colors.background.primary};
  background-image: ${pattern};
  height: ${props => props.baseHeight}rem;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
`
const Section = styled.div`
  flex-grow: ${props => props.grow ? props.grow : 'unset'};
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 100%;
  padding: 0 ${props => Number(props.baseHeight) / 5}rem;
  min-width: 200px;
  max-width: 400px;
  
  & > h1 {
    text-align: center;
    font-size: ${props => Number(props.baseHeight) / 3}rem;
  }
  & > h2 {
    font-size: ${props => Number(props.baseHeight) / 5}rem;
  }
  & > div.container {
    max-width: 300px;
  }
  & > div > img {
    max-width: 100%;
  }
`

const Bottom = props => {
  const baseHeight = Number(variables.bottomBarHeight) * props.height

  const Logo = () => {
    if (props.logo) {
      if (props.logo.length > 0) {
        return (
          <Section baseHeight={baseHeight}>
            <div className='container'>
              <img src={props.logo[0].url} />
            </div>
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
          <Section baseHeight={baseHeight}>
            <SponsorLogos logoArray={props.sponsorLogos} />
          </Section>
        )
      } else { return null }
    } else {
      return null
    }
  }

  return (
    <Bottomground baseHeight={baseHeight}>
      <Section baseHeight={baseHeight}>
        <h1>Up next</h1>
        <h2>{props.upnext}</h2>
      </Section>
      <Section baseHeight={baseHeight}>
        <h1>Local Time</h1>
        <h2>
          <Clock format='HH:mm:ss' ticking />
        </h2>
      </Section>
      <Sponsors />
      <Logo />
    </Bottomground>
  )
}

export default Bottom
