import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Repo.css';

export default class Repo extends Component {
  render() {
    const { title, description, link } = this.props;

    return (
      <div className="Repo">
        <a href={link} className="Repo__title">
          {title}
        </a>
        <div className="Repo__description">{description}</div>
      </div>
    );
  }
}

Repo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
