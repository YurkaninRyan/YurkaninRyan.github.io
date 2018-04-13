import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AnimatedCard from 'components/AnimatedCard';

import Description from './Description';
import SocialMediaBar from './SocialMediaBar';

import './Bio.css';

export default class Bio extends PureComponent {
  render() {
    const {
      enabled,
      name,
      image,
      points,
      hasSocial,
      renderSubtext,
    } = this.props;
    const style = {
      backgroundImage: `url(${image})`,
    };

    return (
      <AnimatedCard in={enabled} className="Bio">
        <div role="img" style={style} className="Bio__image" />
        <div className="Bio__details">
          <h1 className="Bio__name">{name}</h1>
          <Description points={points} renderSubtext={renderSubtext} />
          {hasSocial && <SocialMediaBar />}
        </div>
      </AnimatedCard>
    );
  }
}

Bio.propTypes = {
  enabled: PropTypes.bool.isRequired,
  name: PropTypes.string,
  image: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.string),
  hasSocial: PropTypes.bool,
  renderSubtext: PropTypes.func,
};

Bio.defaultProps = {
  name: 'Lorem Ipsum',
  image: '',
  points: [''],
  hasSocial: false,
  renderSubtext: () => {},
};
