import React from 'react';
import PropTypes from 'prop-types';
import landingMobile from '../../assets/landing-mobile.jpg';
import landingDesktop from '../../assets/landing-desktop.jpg';

const blurStyle = {
  filter: 'blur(5px)',
  transition: '.5s ease-out',
};

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { blur } = this.props;

    return (
      <div style={blur ? blurStyle : {}}>
        <picture>
          <source media="(max-width: 415px)" srcSet={landingMobile} />
          <source media="(min-width: 416px)" srcSet={landingDesktop} />
          <img src={landingDesktop} alt="our happy couple" className="screen-width-img hero-image" />
        </picture>
        <div className="landing-heading-container">
          <h1>IT'S GONNA<br />BE A PARTY...</h1>
          <h1 className="landing-heading script">a McCarty Party!</h1>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  blur: PropTypes.bool,
};

Landing.defaultProps = {
  blur: false,
};

export default Landing;
