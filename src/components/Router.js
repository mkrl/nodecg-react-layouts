import React from 'react'
import Standby from '../layouts/Standby'

// Render a layout depending on 'layout' replicant value
const Router = props => {
  switch (props.layout) {
    case "standby":
      return <Standby upnext={props.upnext}/>
    default:
      return <Standby />
  }
}

export default Router