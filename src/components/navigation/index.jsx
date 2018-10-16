import React from 'react';
import { NavLink } from 'react-router-dom';

const active = {
  fontWeight: 'bold',
};

const navStyle = {
  open: {
    alignItems: 'flex-end',
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(45, 1, 27, .8)',
    boxSizing: 'border-box',
    height: '100vh',
    justifyContent: 'flex-end',
    padding: '25px',
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
    this.setState(state => ({ navOpen: !state.navOpen }));
  }

  render () {
    const { children } = this.props;
    const { navOpen } = this.state;

    return (
      <div>
        <nav className="nav-bar" style={navOpen ? navStyle.open : navStyle.closed}>
          {/* <div className="hamburger-container"> */}
            <div className="hamburger-box">
              <input
                type="checkbox"
                className="hamburger"
                id="hamburger"
                checked={navOpen}
                onChange={this.toggleNav}
              />
              <label htmlFor="hamburger" className="hamburger-spin">
                <div className="bun diagonal bun-top" />
                <div className="bun horizontal" />
                <div className="bun diagonal bun-bottom" />
              </label>
            </div>
          {/* </div> */}
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

export default Navigation;
