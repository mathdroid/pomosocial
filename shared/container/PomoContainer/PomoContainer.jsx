/* eslint no-unused-vars:0 */
import React, { PropTypes, Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';

class PomoContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddPomo: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.add = this.add.bind(this);
  }

  handleClick(e) {
    this.setState({
      showAddPomo: !this.state.showAddPomo,
    });

    e.preventDefault();
  }

  add(name, title, content) {
    this.props.dispatch(Actions.addPomoRequest({ name, title, content }));
    this.setState({
      showAddPomo: false,
    });
  }

  render() {
    return (
      <div>
        <Header onClick={this.handleClick} />
        <div>
          Pilot here
        </div>
        <div>
          Pomo list here
        </div>
        <Footer />
      </div>
    );
  }
}

PomoContainer.need = [() => { return Actions.fetchPomos(); }];
PomoContainer.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    posts: store.posts,
  };
}

PomoContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PomoContainer);
