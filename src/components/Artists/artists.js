import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'

const Artists = () => {
  return (
      <div className="artist-container" id="artistsSection">
        <ParticlesDiv />
        <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}></span> </span>
        <Fade duration={700} top cascade><span className="pf-400 section-headig"></span></Fade>
        <Slide bottom>
            <p className="lato-400 about artist">
          </p>
          </Slide>
          <br />
          <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '25px'}}></span> </span>
      </div>
  )
}

export default Artists
