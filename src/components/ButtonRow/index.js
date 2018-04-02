import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ButtonRow.css';

export default class ButtonRow extends Component {
  render() {
    return <div className="ButtonRow">{this.props.children}</div>;
  }
}

ButtonRow.propTypes = {
  children: PropTypes.node.isRequired,
};
