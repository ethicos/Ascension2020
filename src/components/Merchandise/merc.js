import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'
import ImageFadeIn from 'react-image-fade-in'

export default class Merc extends Component {
  render() {
    return (
      <div className="merc-container" id="mercSection">
        <ParticlesDiv />
        <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>05</span> MERCHANDISE</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">Wear the swag</span></Fade>
        <div className="merc-cont">
            <div className="tee-card" style={{zIndex: '5'}}>
              <img src="./merch/tone.jpg" width="100%" alt="Tshirt one"/>
            </div>
            <div className="tee-card" style={{zIndex: '5'}}>
              <ImageFadeIn src={"./merch/ttwo.jpg"} width={"100%"} alt="Tshirt two"/>

            </div>
            <div className="tee-card" style={{zIndex: '5'}}>
              <img src="./merch/tthree.jpg" width="100%" alt="Tshirt three"/>

            </div>
            <div className="tee-card" style={{zIndex: '5'}}>
              <img src="./merch/tfour.jpg" width="100%" alt="Tshirt four"/>
              </div>
        </div>
      </div>
    )
  }
}
