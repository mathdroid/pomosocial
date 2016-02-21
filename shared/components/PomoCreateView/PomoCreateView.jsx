/* eslint-disable no-unused-vars*/
/* eslint-disable prefer-template*/
import React, { Component, PropTypes } from 'react';

class PomoCreateView extends Component {
  constructor(props, context) {
    super(props, context);
    this.addPomo = this.addPomo.bind(this);
  }

  addPomo() {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPomo(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  }

  render() {
    const cls = 'ui container ' + (this.props.showAddPomo ? '' : 'hidden');
    return (
        <div className={cls}>
          <div className="ui card">
            <div className="content">

              <div className="header">Create new Pomodoro</div>
              <div className="meta">created by: @username</div>
              <div className="ui form">
                <div className="ui field">
                  <label>Title</label>
                  <input type="text" placeholder="Title" ref="title" />
                </div><div className="ui field">
                <label>Description</label>
                <textarea type="text" placeholder="Short description" rows="2" ref="content"></textarea>
              </div><div className="ui right labeled input">
              <input type="text" placeholder="Enter categories" ref="name" />
              <a className="ui tag label">
                Add Tags
              </a>
            </div>

          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic red button">Cancel</div>
            <div className="ui green button" onClick={this.addPomo}>Start</div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

PomoCreateView.propTypes = {
  addPomo: PropTypes.func.isRequired,
  showAddPomo: PropTypes.bool.isRequired,
};

export default PomoCreateView;
