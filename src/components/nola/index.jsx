import React from 'react';
import PropTypes from 'prop-types';
import FrenchQuarterMobile from '../../assets/french-quarter-mobile.jpg';

const blurStyle = {
  filter: 'blur(5px)',
  transition: '.5s ease-out',
};

class NOLA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { blur } = this.props;

    return (
      <div style={blur ? blurStyle : {}}>
        <picture>
          <source media="(max-width: 415px)" srcSet={FrenchQuarterMobile} />
          <source media="(min-width: 416px)" srcSet={FrenchQuarterMobile} />
          <img src={FrenchQuarterMobile} alt="a red French Quarter building" className="screen-width-img hero-image" />
        </picture>
        <div className="nola-heading-container">
          <div className="nola-heading-color-box">
            <h1 className="nola-heading">
              PLAN<br />
              YOUR<br />
              VISIT<br />
            </h1>
          </div>
          <h2 className="nola-subheading script">Coming Soon!</h2>
        </div>
      </div>
    );
  }
}

NOLA.propTypes = {
  blur: PropTypes.bool
};

NOLA.defaultProps = {
  blur: false
};

export default NOLA;
