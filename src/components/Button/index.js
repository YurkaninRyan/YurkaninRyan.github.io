import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

export default class Button extends Component {
  render() {
    const { children, secondary, ...props } = this.props;

    const containerClass = classNames('Button', {
      'is-secondary': secondary,
    });

    return (
      <button {...props} className={containerClass}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  secondary: false,
  children: null,
};
