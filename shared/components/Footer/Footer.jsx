/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router';

function Footer(props, context) {
  const tabHomeCls = "tabbar-item " + (context.router.isActive('/', true) ? "active" : "");
  const tabInfoCls = "tabbar-item " + (context.router.isActive('/', true) ? "" : "active");
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui stackable inverted divided equal height stackable grid">
          <div className="sixteen wide column">
            <h4 className="ui inverted header">Pomosocial</h4>
            <div className="ui inverted link list">
              <a href="#" className="item">&copy; 2016 Muhammad Mustadi</a>
              <span><img src="http://forthebadge.com/images/badges/built-with-love.svg" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>


 );
}

Footer.contextTypes = {
  router: React.PropTypes.object,
};
export default Footer;
