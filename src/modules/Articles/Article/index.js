import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sentinel from 'react-sentinel';

import Button from 'components/Button';

import getArticleImageURL from 'utils/getArticleImageURL';

import './Article.css';

export default class Article extends Component {
  constructor() {
    super();

    this.image = null;
    this.getImageReference = this.getImageReference.bind(this);
    this.observeImageDimensions = this.observeImageDimensions.bind(this);
    this.goToPost = this.goToPost.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  getImageReference(el) {
    this.image = el;
  }

  observeImageDimensions() {
    const height = this.image.offsetHeight;
    const width = this.image.offsetWidth;

    return { height, width };
  }

  goToPost() {
    window.open(this.props.url);
  }

  renderImage({ height, width }) {
    const { image } = this.props;
    const style = {
      background: `url(${getArticleImageURL(image, height, width)})`,
    };

    return (
      <div
        ref={this.getImageReference}
        style={style}
        className="Article__image"
      />
    );
  }

  render() {
    const { title, preview } = this.props;

    return (
      <div className="Article">
        <Sentinel
          observe={this.observeImageDimensions}
          render={this.renderImage}
        />
        <div className="Article__details">
          <div className="Article__title">{title}</div>
          <div className="Article__preview">{preview}</div>
          <Button
            secondary
            className="Article__read-more"
            onClick={this.goToPost}
          >
            Read More
          </Button>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
