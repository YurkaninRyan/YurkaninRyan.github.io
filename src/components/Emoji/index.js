import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Emoji extends PureComponent {
  render() {
    const { emoji } = this.props;
    return <span role="img">{emoji}</span>;
  }
}

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
};
