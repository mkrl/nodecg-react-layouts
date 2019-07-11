import React from 'react'
import Stream from '../components/Stream'
import Bottom from '../components/Bottom'
import Nameplates from '../components/Nameplates'

const Standby = props => (
  <Stream>
    <Nameplates host1={props.host1} host2={props.host2} guest1={props.guest1} guest2={props.guest2} guest3={props.guest3} people={props.people} visible={props.namesVisible}/>
    <Bottom logo={props["assets:logo"]} sponsorLogos={props["assets:sponsors"]} upnext={props.upnext}/>
  </Stream>
)

export default Standby