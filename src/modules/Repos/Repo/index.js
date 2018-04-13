import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from 'react-icons/lib/go/star';

import './Repo.css';

export default class Repo extends Component {
  render() {
    const { title, description, link, stars } = this.props;

    return (
      <div className="Repo">
        <a href={link} className="Repo__title">
          {title}
        </a>
        <div className="Repo__description">{description}</div>
        {!!stars && (
          <div className="Repo__meta">
            <div className="Repo__meta-item">
              <Star className="Repo__meta-item-icon" size="0.8rem" />
              <span className="Repo__meta-item-text">{stars}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Repo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  stars: PropTypes.number,
};

Repo.defaultProps = {
  stars: 0,
};
