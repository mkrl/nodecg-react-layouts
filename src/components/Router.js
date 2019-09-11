import React from 'react'
import Standby from '../layouts/Standby'
import Stats from '../layouts/Stats'
import Game from '../layouts/Game'

// Render a layout depending on 'layout' replicant value
const Router = props => {
  switch (props.layout) {
    case "standby":
      return <Standby {...props}/>
    case "stats":
      return <Stats {...props}/>
    case "game":
      return <Game {...props}/>
    default:
      // Fallback to standby for unknown layouts
      return <Standby {...props}/>
  }
}

export default Router