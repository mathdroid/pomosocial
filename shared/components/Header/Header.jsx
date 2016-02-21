/* eslint no-unused-vars: 0 */
/* eslint-disable prefer-template*/
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import {
  Container,
  Group,
  NavBar,
  amStyles,
} from 'amazeui-touch';

import LeftNav from './LeftNav';


const clickHandler = (item, e) => {
  // e.preventDefault();
  // console.log(item);
};

const itemLeft = {
  href: '/',
  title: 'Back'
};
const itemRight = {
  href: '#',
  title: 'Right'
};


const itemTitle = {
  href: '/',
  title: 'Pomosocial'
};
//
// const dataAll = {
//   title: 'Navbar',
//   leftNav: [{...itemLeft, icon: 'left-nav'}],
//   rightNav: [{...itemRight, icon: 'right-nav'}],
//   onSelect: clickHandler,
// };
//
// const dataLeft = {
//   title: 'Navbar',
//   leftNav: [{...itemLeft, icon: 'left-nav'}],
//   onSelect: clickHandler,
// };

let dataRight = {
  title: <Link to="/">Home</Link>,
  rightNav: [itemRight, itemRight],
  onSelect: clickHandler,
  amStyle: 'alert'
};

var inputProps = {
};


function Header(props, context) {

  // if (context.router.isActive('/', true)) {
  //   dataRight.amStyle = 'primary'
  // } else {
  //   dataRight.amStyle = 'alert';
  //   dataRight.leftNav = [itemLeft];
  // }
  return (
    <NavBar {...dataRight}/>
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
