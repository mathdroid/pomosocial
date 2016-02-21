/* eslint no-unused-vars: 0 */
/* eslint-disable prefer-template*/
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import {
  Container,
  Group,
  NavBar,
  amStyles,
  Icon,
} from 'amazeui-touch';

function LeftNav(props, context) {
  var leftNav;
  if (context.router.isActive('/', true)) {
    leftNav = null;
  } else {
    leftNav = <div className="navbar-nav navbar-left"><span className="icon icon-left-nav navbar-icon"></span><Link className="navbar-nav-item add-post-button" to="/" onClick={props.onClick}><span className="navbar-nav-title">Back</span></Link></div>;
  }
  return (
    <div>
      {leftNav}
    </div>
  );
}

LeftNav.contextTypes = {
  router: React.PropTypes.object,
};

LeftNav.propTypes = {
  onClick: PropTypes.func,
  handleLogoClick: PropTypes.func,
};

export default LeftNav;
