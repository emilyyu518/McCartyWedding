import React from 'react';
import storyMobile from '../../assets/story-mobile.jpg';
import storyBgMobile from '../../assets/story-bg-mobile.jpg';
import storyDesktop from '../../assets/story-desktop.jpg';
import storyBgDesktop from '../../assets/story-bg-desktop.jpg';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <picture>
          <source media="(max-width: 415px)" srcSet={storyMobile} />
          <source media="(min-width: 416px)" srcSet={storyDesktop} />
          <img src={storyDesktop} alt="our happy couple" className="screen-width-img hero-image" />
        </picture>
        <div className="story-heading-container">
          <h1 className="story-heading">OUR STORY</h1>
          <h2 className="story-subheading script">Curious? Read on!</h2>
        </div>
        <div className="story-col">
          <picture>
            <source media="(max-width: 415px)" srcSet={storyBgMobile} />
            <source media="(min-width: 416px)" srcSet={storyBgDesktop} />
            <img src={storyBgDesktop} alt="our happy couple" className="screen-width-img" />
          </picture>
        </div>
      </div>
    );
  }
}

export default Story;
