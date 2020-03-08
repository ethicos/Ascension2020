import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faInstagram, faFacebook, faTwitter);


const NavbarLinks = (props) => {

  return (
    <div>
      <ul className="ul-test">
          <li><AnchorLink className="pf-400 nav-links" href="#aboutSection" onClick={props.closeTheNav}>About</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#artistsSection" onClick={props.closeTheNav}>Proshows</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#eventsSection" onClick={props.closeTheNav}>Events</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#sponsorsSection" onClick={props.closeTheNav}>Sponsors</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#mercSection" onClick={props.closeTheNav}>Merchandise</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#teamSection" onClick={props.closeTheNav}>Team</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#contactSection" onClick={props.closeTheNav}>Contact Us</AnchorLink></li>
          <li>
            <a
              style={{
                color: 'white'
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://m.facebook.com/Ascension-2020-106003614311313/">
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                size="2x"
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
                size="2x"
                style={{
                  margin: '0px 5px'
                }}
              />
            </a>
          </li>
      </ul>
    </div>
  )
}

export default NavbarLinks
