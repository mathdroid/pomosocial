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

const clickHandler = (item, e) => {
  e.preventDefault();
  console.log(item);
};

const itemLeft = {
  href: '#',
  title: 'Left'
};

const itemRight = {
  href: '#',
  title: 'Right'
};

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

const dataRight = {
  title: 'Navbar',
  rightNav: [itemRight, itemRight],
  onSelect: clickHandler,
};

function Header(props, context) {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="site-title">
          <Link to="/" onClick={props.handleLogoClick}>MERN Starter Blog</Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className="add-post-button" href="#" onClick={props.onClick}>Add Post</a>
            : null
        }
      </div>
    </div>
    <NavBar
      {dataRight}
      title="Title on Left"
      titleOnLeft
    />
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

// import React from 'react';

//

// const NavBarExample = React.createClass({
//   renderStyles(style, index) {
//     return (
//       <div key={index}>
//         <NavBar
//           {...dataAll}
//           amStyle={style.toLowerCase()}
//         />
//         <br />
//       </div>
//     );
//   },
//
//   render() {
//     return (
//       <Container {...this.props}>
//         <Group
//           header="颜色样式"
//         >
//           <NavBar {...dataAll} />
//
//           <br />
//
//           {amStyles.map(this.renderStyles)}
//         </Group>
//
//         <Group
//           header="图标"
//         >
//           <NavBar {...dataLeft} rightNav={[{icon: 'bars'}]} />
//         </Group>
//
//         <Group
//           header="多链接"
//         >
//           <NavBar {...dataRight} />
//         </Group>
//
//         <Group
//           header="标题居左"
//         >
//           <NavBar
//             {...dataRight}
//             title="Title on Left"
//             titleOnLeft
//           />
//         </Group>
//       </Container>
//     );
//   }
// });
//
// export default NavBarExample;
