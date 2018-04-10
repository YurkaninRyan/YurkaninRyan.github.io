import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import personalRyanPoints from 'assets/config/personalRyanPoints';
import professionalRyanPoints from 'assets/config/professionalRyanPoints';
import RyanYurkanin from 'assets/images/RyanYurkanin.jpg';

import FeatureConstants from 'constants/FeatureConstants';

import Bio from 'modules/Bio';

class RyanBio extends Component {
  render() {
    return (
      <Bio
        hasSocial
        name="Ryan Yurkanin"
        image={RyanYurkanin}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = ({ features }) => ({
  renderSubtext: () =>
    features[FeatureConstants.PROFESSIONAL_BIO] ? (
      <span>
        <span>FE React Developer </span>
        <a
          href="https://www.getguru.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          @GuruHQ
        </a>
      </span>
    ) : (
      'Gamer, Drummer, Programmer'
    ),
  points: features[FeatureConstants.PROFESSIONAL_BIO]
    ? professionalRyanPoints
    : personalRyanPoints,
});

export default connect(mapStateToProps)(RyanBio);

RyanBio.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string),
  renderSubtext: PropTypes.func,
};

RyanBio.defaultProps = {
  points: [''],
  renderSubtext: () => {},
};
