import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'

const CurrentArtists = () => {
  return (
    <div className="about-section new-artist" id="artistSection">
    <ParticlesDiv />
      <div className="about-content">
        <Fade duration={700} top cascade><span className="pf-400 section-heading" style={{display: 'block', width: '100%', textAlign: 'center'}}>ASCENSION 2020</span></Fade>
        <div className="about-image artist-image-mob">
            <img src="./ritviz.jpg" alt="Top view"/>
        </div>
        <Slide bottom>
          <p className="pf-400 about">
            <h1>A Medical fiesta aimed at endowing oppurtunities for medical intellects to learn from the experts and to refine their skills through an array of workshops and challenges while instilling professionalism and good ethics<br/>
            </h1>
            <br/>
            <i>#Ascension2020 </i>
          </p>
          
        </Slide>
      </div>
      <div className="about-image artist-image">
        <img src="./ritviz.jpg" alt="Top view"/>
      </div>
    </div>
  )
}

export default CurrentArtists;
