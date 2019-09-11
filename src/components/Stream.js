import styled from 'styled-components'
import colors from '../config/colors'
// (imported css works this way just fine)
// eslint-disable-next-line no-unused-vars
import font from '../assets/font/font.css'

const Stream = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: transparent;
  color: ${colors.text.primary};
  font-family: 'BebasNeue', Helvetica, sans-serif;
  /* background: url(http://i.imgur.com/hGVWW.jpg); */

  & h1, h2, h3, h4 {
    font-weight: 700;
  }
`
export default Stream
