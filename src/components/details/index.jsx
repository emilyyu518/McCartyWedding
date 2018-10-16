import React from 'react';
import detailsMobile from '../../assets/details-mobile.jpg';
import detailsDesktop from '../../assets/details-desktop.jpg';
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
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
          <h3 className="details-etc script">Details to follow.</h3>
        </div>
      </div>
    );
  }
}

export default Details;
