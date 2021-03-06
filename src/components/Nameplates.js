import React from 'react'
import styled from 'styled-components'
import variables from '../config/variables'
import colors from '../config/colors'
// (imported css works this way just fine)
// eslint-disable-next-line no-unused-vars
import social from '../assets/icons/social.css'

const PlateArea = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: flex-end;
  transition: all 0.3s ease-in-out;
  height: ${Number(variables.bottomBarHeight) - 2}rem;
  margin-bottom: 2rem;
  &.hidden {
    height: 0;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
`

const Plate = styled.div`
  min-width: 10rem;
  background-color: ${colors.background.primary};
  padding: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 55px;
  opacity: 1;
  &:first-of-type, &:last-of-type {
    height: 75px;
    & h1 {
    font-size: 3rem;
    }
    & h2 {
      font-size: 1.5rem;
    }
  }
  &:first-of-type {
    padding-right: 2rem;
  }
  &:last-of-type {
    padding-left: 2rem;
    align-items: flex-end;
    & h2 {
      display: flex;
      flex-direction: row-reverse;
      & i {
        margin-right: 0;
        margin-left: 0.5rem;
      }
    }
  }

  &.hidden {
    height: 0;
    opacity: 0;
  }

  & h1 {
    font-size: 2.5rem;
  }
  & h2 {
    color: ${colors.text.secondary};
    display: flex;
    font-size: 1rem;
  }
  & h2 i {
    margin-right: 0.5rem;
  }
`

const Nameplates = props => {
  let people = []
  let host1 = {}
  let host2 = {}
  let guest1 = {}
  let guest2 = {}
  let guest3 = {}
  if (props.people) {
    people = props.people
  }
  const getPersonData = person => people.find(item => item.name === person)

  // TODO: refactor this
  if ((props.host1) && (props.people)) {
    host1 = getPersonData(props.host1)
  }
  if ((props.host2) && (props.people)) {
    host2 = getPersonData(props.host2)
  }
  if ((props.guest1) && (props.people)) {
    guest1 = getPersonData(props.guest1)
  }
  if ((props.guest2) && (props.people)) {
    guest2 = getPersonData(props.guest2)
  }
  if ((props.guest3) && (props.people)) {
    guest3 = getPersonData(props.guest3)
  }

  return (
    <PlateArea className={props.visible ? '' : 'hidden'}>
      <Plate className={props.host1 ? '' : 'hidden'}>
        <h1>{host1.name}</h1>
        <h2><i className={'social social-' + host1.type} />{host1.contact}</h2>
      </Plate>
      <Plate className={props.guest1 ? '' : 'hidden'}>
        <h1>{guest1.name}</h1>
        <h2><i className={'social social-' + guest1.type} />{guest1.contact}</h2>
      </Plate>
      <Plate className={props.guest2 ? '' : 'hidden'}>
        <h1>{guest2.name}</h1>
        <h2><i className={'social social-' + guest2.type} />{guest2.contact}</h2>
      </Plate>
      <Plate className={props.guest3 ? '' : 'hidden'}>
        <h1>{guest3.name}</h1>
        <h2><i className={'social social-' + guest3.type} />{guest3.contact}</h2>
      </Plate>
      <Plate className={props.host2 ? '' : 'hidden'}>
        <h1>{host2.name}</h1>
        <h2><i className={'social social-' + host2.type} />{host2.contact}</h2>
      </Plate>
    </PlateArea>
  )
}

export default Nameplates
