import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import ParticlesDiv from '../Particles/particles'

library.add(faInstagram, faFacebook, faTwitter);

const ContactUs = () => {
  return (
    <div className="contact-section" id="contactSection">
      <ParticlesDiv />
      <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>07</span> CONTACT US</span>
      <Fade duration={700} top cascade><span className="pf-400 section-heading">Reach Us</span></Fade>
      <img src="./1.png" height="100px" width="100px" alt=""/>
      <Slide><p className="pf-400 venue">P K DAS INSTITUTE OF MEDICAL SCIENCES</p></Slide>
      <div className="map" title="Get Directions">
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/PK+DAS+Institute+of+Medical+Sciences+-+Hospital+and+Medical+College/@10.7828475,76.3269766,15z/data=!4m6!3m5!1s0x0:0x8c723734a47875b4!4b1!8m2!3d10.7828475!4d76.3269766">
          <img src='./map1.png' width="100%" alt="pkdas location"/>
        </a>
      </div>
      <div className="lp-link-box cp-box">
            <a href="mailto:ascension2020@gmail.com" style={{textDecoration: 'none', color: 'white'}} title="Send mail" className="lp-link-boxes lp-link-box-one cp-boxes">
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                color: 'white',
                textDecoration: 'none'
              }}>
              <span className="lato-400 small-lato">EMAIL</span>
              <span className="pf-400">
                ascension2020@gmail.com
              </span>
              </div>
            </a>
            <div href="#aboutSection" className="lp-link-boxes lp-link-box-two cp-boxes">
              <span className="lato-400 small-lato">PHONE</span>
              <span className="pf-400">
                +91-9446481885
              </span>
            </div>
            <div href="#aboutSection" className="lp-link-boxes lp-link-box-two cp-boxes">
              <span className="lato-400 small-lato">SOCIAL MEDIA</span>
              <span className="pf-400">
                Follow - &nbsp;
                  <a
                    style={{
                      color: 'white'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://m.facebook.com/Ascension-2020-106003614311313/">
                    <FontAwesomeIcon
                      icon={["fab", "facebook"]}
                      style={{
                        margin: '0px 5px'
                      }}
                    />
                  </a>
                  <a
                    style={{
                      color: 'white'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/invites/contact/?i=7aqvm89l9b4r&utm_content=dmlqdh1">
                    <FontAwesomeIcon
                      icon={["fab", "instagram"]}
                      style={{
                        margin: '0px 5px'
                      }}
                    />
                  </a>
              </span>
            </div>
    </div>
    </div>
  )
}

export default ContactUs
