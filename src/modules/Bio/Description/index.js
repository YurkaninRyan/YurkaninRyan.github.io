import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Description.css';

export default class Description extends Component {
  render() {
    const { renderSubtext, points } = this.props;
    return (
      <div className="Description">
        <sub className="Description__subtext">{renderSubtext()}</sub>
        <ul className="Description__list">
          {points.map(point => <li key={point.substring(0, 10)}>{point}</li>)}
        </ul>
      </div>
    );
  }
}

Description.propTypes = {
  renderSubtext: PropTypes.func,
  points: PropTypes.arrayOf(PropTypes.string),
};

Description.defaultProps = {
  renderSubtext: () => {},
  points: [''],
};
