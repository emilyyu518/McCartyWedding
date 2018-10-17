import React from 'react';
import PropTypes from 'prop-types';
import rsvpMobile from '../../assets/rsvp-mobile.jpg';
import rsvpDesktop from '../../assets/rsvp-desktop.jpg';

const blurStyle = {
  filter: 'blur(5px)',
  transition: '.5s ease-out',
};

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { blur } = this.props;

    return (
      <div style={blur ? blurStyle : {}}>
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

RSVP.propTypes = {
  blur: PropTypes.bool
};

RSVP.defaultProps = {
  blur: false
};

export default RSVP;
