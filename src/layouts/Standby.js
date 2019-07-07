import React from 'react'
import Stream from '../components/Stream'
import Bottom from '../components/Bottom'

const Standby = props => (
  <Stream>
    <Bottom upnext={props.upnext}/>
  </Stream>
)

export default Standby