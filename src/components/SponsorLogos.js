import React from 'react'
import { Slide } from 'react-slideshow-image'
import { createGlobalStyle } from 'styled-components'

// TODO: make this mess prettier
// Styles to conquer react-slideshow-image stupidity
const SlideStyle = createGlobalStyle`
  .slide-wrapper {
    height: 100%;
    padding: 1rem;
    & > div {
      height: 100%;
    }

    .react-slideshow-container {
      width: 400px;
      height: 100%;
      & img {
        max-width: 100%;
        margin: 0 auto;
      }
      & * {
        height: 100%;
      }
      & .images-wrap div {
        display: flex;
      }
    }

  }
`

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
}

const SponsorLogos = props => {
  if (props.logoArray) {
    if (props.logoArray.length > 0) {
      const images = props.logoArray.map((image, index) => <img src={image.url} key={index} />)
      return (
        <>
          <SlideStyle />
          <div className="slide-wrapper">
            <Slide {...properties}>
              {images}
            </Slide>
          </div>
        </>
      )
    } else { return null }
  } else {
    return null
  }
}

export default SponsorLogos
