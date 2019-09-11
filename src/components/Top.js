import React from 'react'
import styled from 'styled-components'
import colors from '../config/colors'
import pattern from '../assets/pattern'

const Topground = styled.section`
  background-color: ${colors.background.primary};
  background-image: ${pattern};
  max-height: ${props => props.baseHeight}rem;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  padding: 0.5rem;
  & > h1 {
    font-size: 2rem;
    padding: 0 1rem;
  }  
`

const Top = props => {
  return (
    <Topground baseHeight={props.height}>
      <h1>{props.onnow}</h1>
      <h1>{props.title}</h1>
    </Topground>
  )
}

export default Top
