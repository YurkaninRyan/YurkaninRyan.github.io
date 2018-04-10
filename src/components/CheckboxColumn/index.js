import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CheckboxColumn.css';

export default class CheckboxColumn extends Component {
  render() {
    return <div className="CheckboxColumn">{this.props.children}</div>;
  }
}

CheckboxColumn.propTypes = {
  children: PropTypes.node.isRequired,
};
