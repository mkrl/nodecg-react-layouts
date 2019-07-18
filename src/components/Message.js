import React from 'react'
import styled from 'styled-components'
import colors from '../config/colors'

// TODO: fix goofy text mid-transition
const Area = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 20%;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 2rem;
  flex: 1;
  align-self: flex-start;
  transition: all 0.3s ease-in-out;
  &.hidden {
    max-width: 0;
    transition: all 0.3s ease-in-out;
  }
  & p {
    font-size: 1.5rem;
    background-color: ${colors.background.primary};
    padding: 0.6rem 2rem 0.3rem 1rem;
    border-bottom: 5px ${colors.background.secondary} solid;
    max-height: 5rem;
    overflow: hidden;
  }
`
class Message extends React.Component {

  constructor() {
    super()
    this.state = {
      visible: false,
      throttled: false,
      text: "A toasty message that pops up whenever the server sends some text.",
    }
    this.showMessage = this.showMessage.bind(this)
  }

  componentDidMount() {
  
    // Listening for a one-time message from the server
    window.nodecg.listenFor('toastMessage', message => {
      this.showMessage(message)
    })
  
  }

  showMessage(text) {

    // On-screen message time depends on the length of the message itself
    // It's 5 initial seconds + 1/8th a second per every message symbol
    const duration = 5000 + text.length*125

    // Adding a throttle to prevent accidental message overlap while it's visible
    if (!this.state.throttled) {
      this.setState({ text, visible: true, throttled: true })
      setTimeout( () => {
        this.setState({ 
          visible: false, 
          throttled: false,
        })
      }, duration)
    }
    
  }

  render() {
    if (this.state.text) {
        return (
          <Area className={this.state.visible ? "" : "hidden"}>
            <p>{this.state.text}</p>
          </Area>
        )
      } else {
        return null
      }
  }
}

export default Message