import React from "react"
import ReactDOM from "react-dom"
import NCGStore from './stores/NodecgStore'
import { replicate } from './stores/NodecgStore'
import Router from './components/Router'
import { Reset } from 'styled-reset'

class App extends React.Component {
  constructor() {
  super()
    this.state = {
      replicants: NCGStore.getReplicants(),
    }
  }

  componentDidMount() {
    // Subscribing to replicant changes
    replicate("layout")
    replicate("upnext")
    // We keep all our subscribed replicants in a single "replicants" object
    NCGStore.on("change", () => {
      this.setState({
        replicants: NCGStore.getReplicants(),
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Reset/>
        <Router layout={this.state.replicants.layout} upnext={this.state.replicants.upnext}/>
      </React.Fragment>
    )
  }
}

const root = document.getElementById("app")
ReactDOM.render(<App/>, root)