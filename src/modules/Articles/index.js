import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AnimatedCard from 'components/AnimatedCard';

import './Articles.css';

export default class Articles extends Component {
  render() {
    const { enabled } = this.props;
    return <AnimatedCard in={enabled}>Articles go here!</AnimatedCard>;
  }
}

Articles.propTypes = {
  enabled: PropTypes.bool.isRequired,
};
