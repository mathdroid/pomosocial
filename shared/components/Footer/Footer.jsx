/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router';

import {
  Container,
} from 'amazeui-touch';

function Footer(props, context) {
  const tabHomeCls = "tabbar-item " + (context.router.isActive('/', true) ? "active" : "");
  const tabInfoCls = "tabbar-item " + (context.router.isActive('/', true) ? "" : "active");
  return (
    <nav className="tabbar tabbar-primary">
      <Link className={tabHomeCls} to="/" icon="home">
        <span className="icon icon-home"></span>
        <span className="tabbar-label">Home</span>
      </Link>

      <Link className={tabInfoCls} to="/user" icon="person">
        <span className="icon icon-person"></span>
        <span className="tabbar-label">Profile</span>
      </Link>
    </nav>

 );
}

Footer.contextTypes = {
  router: React.PropTypes.object,
};
export default Footer;
