import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import rsvpMobile from '../../assets/rsvp-mobile.jpg';
import rsvpDesktop from '../../assets/rsvp-desktop.jpg';

const blurStyle = {
  filter: 'blur(5px)',
  transition: '.5s ease-out',
};

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestName: '',
      // guestEmail: '',
      songRequest: '',
      RSVPed: false,
      nameError: false,
      isGoing: false,
      // emailError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.sendRSVP = this.sendRSVP.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange({target}) {
    this.setState({ [target.id]: target.value });
  }

  validateFields(isGoing) {
    const { guestName } = this.state;

    this.setState({
      nameError: guestName.trim().length ? false : true,
      // emailError: guestEmail.trim().length ? false : true,
    }, () => {
      const { nameError } = this.state;
      if (!nameError) {
        this.sendRSVP(isGoing);
      }
    });
  }

  sendRSVP(isGoing) {
    const { guestName, songRequest } = this.state;
    const message = {
      // sender: guestEmail,
      text: `Guest: ${guestName}
RSVP: ${isGoing ? 'Yes' : 'No'}
Song request: ${songRequest}`,
    };
    axios.post('https://g9w1ubflch.execute-api.us-east-1.amazonaws.com/test', message)
      .then(res => this.setState({ RSVPed: true, isGoing }))
      .catch((err) => {
        console.log(err);
        this.setState({ RSVPed: 'error' });
      })
  }

  reset() {
    this.setState({
      RSVPed: false,
      nameError: false,
      isGoing: false,
    });
  }

  render() {
    const { blur } = this.props;
    const { guestName, songRequest, RSVPed, nameError, isGoing } = this.state;

    return (
      <div style={blur ? blurStyle : {}}>
        <picture>
          <source media="(max-width: 415px)" srcSet={rsvpMobile} />
          <source media="(min-width: 416px)" srcSet={rsvpDesktop} />
          <img src={rsvpDesktop} alt="our happy couple" className="screen-width-img hero-image" />
        </picture>
        <div className="rsvp-container">
          <h1 className="rsvp-heading script">Party<br />with<br />&nbsp;&nbsp;us?</h1>
          {!RSVPed && (
            <div className="rsvp-sub-container">
              <div className="rsvp-form-container">
                <input
                  type="text"
                  id="guestName"
                  value={guestName}
                  onChange={this.handleChange}
                  className="text-input"
                  placeholder="Tony Stark"
                />
                <label htmlFor="guestName" className="input-label name-label">
                  NAME
                  {nameError && (
                    <small className="error">REQUIRED!</small>
                  )}
                </label>
                <input
                  type="text"
                  id="songRequest"
                  value={songRequest}
                  onChange={this.handleChange}
                  className="text-input margin-top"
                  placeholder="Highway to Hell"
                />
                <label htmlFor="songRequest" className="input-label">
                  SONG REQUEST?
                </label>
              </div>
              <div className="rsvp-button-container">
                <button type="button" onClick={() => this.validateFields(true)} className="rsvp-button">
                  I'M DOWN!
                </button>
                <button type="button" onClick={() => this.validateFields(false)} className="rsvp-button">
                  I CAN'T MAKE IT.
                </button>
              </div>
            </div>
          )}
          {((RSVPed === true) && isGoing) && (
            <div className="rsvp-form-container">
              <h2 className="response">YAY! WE CAN'T WAIT TO PARTY WITH YOU.</h2>
            </div>
          )}
          {((RSVPed === true) && !isGoing) && (
            <div className="rsvp-form-container">
              <h2 className="response">WE'RE SORRY TO HEAR THAT&mdash;WE'LL MISS YOU!</h2>
            </div>
          )}
          {(RSVPed === 'error') && (
            <div className="rsvp-sub-container">
              <div className="rsvp-form-container">
                <h2 className="response">SORRY, SOMETHING WENT WRONG!</h2>
              </div>
              <div className="rsvp-button-container">
                <button type="button" onClick={this.reset} className="rsvp-button">
                  TRY AGAIN.
                </button>
              </div>
            </div>
          )}
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
