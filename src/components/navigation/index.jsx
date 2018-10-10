import React from 'react';
import { NavLink } from 'react-router-dom';

const active = {
  fontWeight: 'bold',
};

class Navigation extends React.Component {
  render () {
    const { children } = this.props;

    return (
      <div>
        <nav>
          <NavLink
            to="/details"
            activeStyle={active}
            className="nav-link"
          >
            DETAILS
          </NavLink>

          <NavLink
            to="/RSVP"
            activeStyle={active}
            className="nav-link"
          >
            PARTY WITH US
          </NavLink>

          <NavLink
            to="/our-story"
            activeStyle={active}
            className="nav-link"
          >
            OUR STORY
          </NavLink>

          <NavLink
            to="/NOLA"
            activeStyle={active}
            className="nav-link"
          >
            PLAN YOUR STAY
          </NavLink>

          <a 
            href="https://www.zola.com/registry/seanika"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GIVE A GIFT
          </a>
        </nav>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default Navigation;
