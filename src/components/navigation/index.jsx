import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const active = {
  fontWeight: '500',
};

const navStyle = {
  open: {
    alignItems: 'flex-end',
    // backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(45, 1, 27, .8)',
    boxSizing: 'border-box',
    height: '100vh',
    justifyContent: 'flex-end',
    padding: '30px',
    bottom: '0',
    right: '0',
    width: '100vw',
  },
  closed: {},
  notInvisible: {
    height: '73vh',
    width: '100vw',
    paddingTop: '15vh',
    position: 'inherit'
  },
  invisible: {}
};
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    const { toggleBlur } = this.props;

    this.setState(state => ({ navOpen: !state.navOpen }), () => toggleBlur());
  }

  render () {
    const { children } = this.props;
    const { navOpen } = this.state;

    return (
      <div>
        <nav className="nav-bar" style={navOpen ? navStyle.open : navStyle.closed}>
          <div className="hamburger-container">
            <button className={`hamburger hamburger--collapse ${navOpen ? 'is-active' : ''}`} type="button" onClick={this.toggleNav}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
          <div className="invisible-links-wrapper" style={navOpen ? navStyle.notInvisible : navStyle.invisible}>
            <NavLink
              to="/details"
              activeStyle={active}
              className="nav-link"
              onClick={this.toggleNav}
              >
              DETAILS
            </NavLink>

            <NavLink
              to="/RSVP"
              activeStyle={active}
              className="nav-link"
              onClick={this.toggleNav}
              >
              PARTY WITH US
            </NavLink>

            <NavLink
              to="/our-story"
              activeStyle={active}
              className="nav-link"
              onClick={this.toggleNav}
              >
              OUR STORY
            </NavLink>

            <NavLink
              to="/NOLA"
              activeStyle={active}
              className="nav-link"
              onClick={this.toggleNav}
              >
              PLAN YOUR STAY
            </NavLink>

            <a 
              href="https://www.zola.com/registry/seanika"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={this.toggleNav}
            >
              GIVE A GIFT
            </a>
          </div>
        </nav>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  toggleBlur: PropTypes.func,
};

Navigation.defaultProps = {
  toggleBlur: () => null,
};

export default Navigation;
