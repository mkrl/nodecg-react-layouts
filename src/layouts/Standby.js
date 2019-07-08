import React from 'react'
import Stream from '../components/Stream'
import Bottom from '../components/Bottom'

const Standby = props => (
  <Stream>
    <Bottom logo={props["assets:logo"]} upnext={props.upnext}/>
  </Stream>
)

export default Standby