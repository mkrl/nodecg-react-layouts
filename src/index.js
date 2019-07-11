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

    replicate("host1")
    replicate("host2")
    replicate("guest1")
    replicate("guest2")
    replicate("guest3")
    replicate("namesVisible")
    replicate("people")

    replicate("assets:logo")
    replicate("assets:sponsors")
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
        <Router {...this.state.replicants}/>
      </React.Fragment>
    )
  }
}

const root = document.getElementById("app")
ReactDOM.render(<App/>, root)