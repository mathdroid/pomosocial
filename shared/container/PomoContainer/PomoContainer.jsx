/* eslint no-unused-vars:0 */
import React, { PropTypes, Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import PomoCreateView from '../../components/PomoCreateView/PomoCreateView';

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
      <div className="pusher">
        <div id="hero" className="ui inverted vertical masthead center aligned segment">

          <Header onClick={this.handleClick} />

          <div className="ui text container">
            <h1 className="ui inverted header">
              Pomosocial
            </h1>
            <h2>Do pomodoros together.</h2>
            <div className="ui huge primary button">Create New Pomodoro <i className="right arrow icon"></i></div>
          </div>

          <PomoCreateView addPomo={this.add}
            showAddPomo={this.state.showAddPomo}
          />

        </div>

        <div id="pomodoros" className="ui vertical stripe segment">
          <div className="ui text container">
            <h3 className="ui header">Breaking The Grid, Grabs Your Attention</h3>
            <p>{this.pomos}</p>
            <a className="ui large button">Read More</a>
            <h4 className="ui horizontal header divider">
              <a href="#">Case Studies</a>
            </h4>
            <h3 className="ui header">Did We Tell You About Our Bananas?</h3>
            <p>Yes I know you probably disregarded the earlier boasts as non-sequitor filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
            <a className="ui large button">I'm Still Quite Interested</a>
          </div>
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
    pomos: store.pomos,
  };
}

PomoContainer.propTypes = {
  pomos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PomoContainer);
