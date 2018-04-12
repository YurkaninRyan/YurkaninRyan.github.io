import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

export default class Button extends Component {
  render() {
    const { children, className, secondary, ...props } = this.props;

    const containerClass = classNames('Button', className, {
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
  className: PropTypes.string,
};

Button.defaultProps = {
  secondary: false,
  children: null,
  className: '',
};
