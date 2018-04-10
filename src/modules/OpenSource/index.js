import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AnimatedCard from 'components/AnimatedCard';

import './OpenSource.css';

export default class OpenSource extends Component {
  render() {
    const { enabled } = this.props;
    return <AnimatedCard in={enabled}>Open Source goes here!</AnimatedCard>;
  }
}

OpenSource.propTypes = {
  enabled: PropTypes.bool.isRequired,
};
