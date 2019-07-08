import React from 'react'
import { Slide } from 'react-slideshow-image'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

// TODO: make this mess prettier
const SlideStyle = createGlobalStyle`
  .react-slideshow-container {
    width: 400px;
  }
  .react-slideshow-container img{
    max-width: 100%;
  }
`

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const SponsorLogos = props => {

  if (props.logoArray) {
    if (props.logoArray.length > 0) {
      const images = props.logoArray.map((image, index) => <img src={image.url} key={index}/> )
      return (
        <React.Fragment>
          <SlideStyle />
          <Slide {...properties}>
            {images}
          </Slide>
        </React.Fragment>
      )
    } else { return null }
  } else {
    return null
  }
}


export default SponsorLogos