/* eslint no-unused-vars: 0 */
/* eslint-disable prefer-template*/
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

const clickHandler = (item, e) => {
  e.preventDefault();
  console.log(item);
};



function Header(props, context) {

  // if (context.router.isActive('/', true)) {
  //   dataRight.amStyle = 'primary'
  // } else {
  //   dataRight.amStyle = 'alert';
  //   dataRight.leftNav = [itemLeft];
  // }
  return (
    <div className="ui container">
      <div className="ui large secondary inverted pointing menu">
        <a className="toc item">
          <i className="sidebar icon"></i>
        </a>
        <a className="active item">Home</a>
        <a className="item" href="#pomodoros">Pomodoros</a>
        <div className="right item">
          <a className="ui inverted button" href="#" onClick={props.onClick}>Create New</a>
        </div>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};

export default Header;
