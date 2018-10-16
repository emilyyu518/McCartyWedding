import React from 'react';
import rsvpMobile from '../../assets/rsvp-mobile.jpg';
import rsvpDesktop from '../../assets/rsvp-desktop.jpg';

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <picture>
          <source media="(max-width: 415px)" srcSet={rsvpMobile} />
          <source media="(min-width: 416px)" srcSet={rsvpDesktop} />
          <img src={rsvpDesktop} alt="our happy couple" className="screen-width-img hero-image" />
        </picture>
        <div className="rsvp-container">
          <h1 className="rsvp-heading script">Party<br />with<br />&nbsp;&nbsp;us?</h1>
        </div>
      </div>
    );
  }
}

export default RSVP;
