import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

import './AnimatedCard.css';

export default class AnimatedCard extends Component {
  render() {
    const { in: active, timeout, className, children } = this.props;
    return (
      <Transition in={active} timeout={timeout}>
        {state => (
          <div className={`AnimatedCard ${className} is-${state}`}>
            {children}
          </div>
        )}
      </Transition>
    );
  }
}

AnimatedCard.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  className: PropTypes.string,
};

AnimatedCard.defaultProps = {
  timeout: 0,
  className: '',
};
