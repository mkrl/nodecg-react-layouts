import React from 'react'
import Standby from '../layouts/Standby'
import Stats from '../layouts/Stats'

// Render a layout depending on 'layout' replicant value
const Router = props => {
  switch (props.layout) {
    case "standby":
      return <Standby {...props}/>
    case "stats":
      return <Stats {...props}/>
    default:
      return <Standby {...props}/>
  }
}

export default Router