import React from 'react';
import PropTypes from 'prop-types';
import ScrollableAnchor from 'react-scrollable-anchor';
import storyMobile from '../../assets/story-mobile.jpg';
import storyBgMobile from '../../assets/story-bg-mobile.jpg';
import storyDesktop from '../../assets/story-desktop.jpg';
import storyBgDesktop from '../../assets/story-bg-desktop.jpg';
import whiskersLeft from '../../assets/whiskers-left.svg';
import whiskersRight from '../../assets/whiskers-right.svg';

const blurStyle = {
  filter: 'blur(5px)',
  transition: '.5s ease-out',
};

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { blur } = this.props;

    return <div style={blur ? blurStyle : {}}>
        <picture>
          <source media="(max-width: 415px)" srcSet={storyMobile} />
          <source media="(min-width: 416px)" srcSet={storyDesktop} />
          <img src={storyDesktop} alt="our happy couple" className="screen-width-img hero-image" />
        </picture>
        <div className="story-heading-container">
          <h1 className="story-heading">OUR STORY</h1>
          <div className="story-subheading-container">
            <img src={whiskersLeft} className="whiskers whiskers-left" />
            <a href="#story">
              <h2 className="story-subheading script">Curious? Read on!</h2>
            </a>
            <img src={whiskersRight} className="whiskers whiskers-right" />
          </div>
        </div>
        <div className="story-col">
          <ScrollableAnchor id={'story'}>
            <div className="story-container">
              <p className="story-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
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

Story.propTypes = {
  blur: PropTypes.bool
};

Story.defaultProps = {
  blur: false
};

export default Story;
