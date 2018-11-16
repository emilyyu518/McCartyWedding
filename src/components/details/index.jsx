import React from 'react';
import PropTypes from 'prop-types';
import ScrollableAnchor from 'react-scrollable-anchor';
import detailsMobile from '../../assets/details-mobile.jpg';
import detailsDesktop from '../../assets/details-desktop.jpg';
import storyBgMobile from '../../assets/story-bg-mobile.jpg';
import storyBgDesktop from '../../assets/story-bg-desktop.jpg';
import whiskersLeft from '../../assets/whiskers-left.svg';
import whiskersRight from '../../assets/whiskers-right.svg';

const blurStyle = {
  filter: 'blur(5px)',
  transition: '.5s ease-out',
};

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { blur } = this.props;

    return <div style={blur ? blurStyle : {}}>
        <picture>
          <source media="(max-width: 415px)" srcSet={detailsMobile} />
          <source media="(min-width: 416px)" srcSet={detailsDesktop} />
          <img src={detailsDesktop} alt="our happy couple" className="screen-width-img hero-image" />
        </picture>
        <div className="details-container">
          <h1 className="details-names">ERIKA</h1>
          <h1 className="details-names">+</h1>
          <h1 className="details-names">SEAN</h1>
          <h2 className="details-date light">DECEMBER 15, 2018</h2>
          <h2 className="details-location light">NEW ORLEANS, LA</h2>
          <div className="details-link-container">
            <img src={whiskersLeft} className="whiskers whiskers-left" />
            <a href="#details">
              <h3 className="details-etc script">See the details!</h3>
            </a>
            <img src={whiskersRight} className="whiskers whiskers-right" />
          </div>
        </div>
        <div className="details-col">
          <ScrollableAnchor id={'details'}>
            <div className="further-details-container">
              <div className="further-details-text">
                <h2 className="further-details-heading">RECEPTION</h2>
                <span className="lowercase-details-text">
                  from 7-10pm
                </span>
                <h2 className="further-details-heading padding-top">LOCATION</h2>
                <span className="lowercase-details-text">
                  Octavia Art Gallery
                  <br />
                  454 Julia St
                </span>
                <h2 className="further-details-heading padding-top">
                GRAND ENTRANCE
                </h2>
                <span className="lowercase-details-text">
                  of the newly Mr. & Mrs. McCarty at 7pm
                </span>
              </div>
              <picture>
                <source media="(max-width: 415px)" srcSet={storyBgMobile} />
                <source media="(min-width: 416px)" srcSet={storyBgDesktop} />
                <img src={storyBgDesktop} alt="our happy couple" className="screen-width-img" />
              </picture>
            </div>
          </ScrollableAnchor>
        </div>
      </div>;
  }
}

Details.propTypes = {
  blur: PropTypes.bool
};

Details.defaultProps = {
  blur: false
};

export default Details;
