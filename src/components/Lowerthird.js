import React from 'react'
import styled from 'styled-components'
import colors from '../config/colors'

const Area = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  max-width: 45%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 2rem;
  align-self: flex-end;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  &.hidden {
    opacity: 0;
    width: 0;
    transition: all 0.4s ease-in-out;
  }

  & h1, p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & h1 {
    font-size: 3rem;
    padding: 1rem 1rem 0.3rem 3rem;
    background-color: ${colors.background.secondary};
    margin: 0;
  }
  & p {
    font-size: 1.5rem;
    background-color: ${colors.background.primary};
    padding: 0.6rem 1rem 0.3rem 3rem;
  }
`

const Lowerthird = props => {

  return (
      <Area className={props.visible ? "" : "hidden"}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </Area>
  )

}

export default Lowerthird