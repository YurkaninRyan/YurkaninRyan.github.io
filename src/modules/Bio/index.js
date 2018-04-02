import React, { Component } from 'react';
import { connect } from 'react-redux';

import FeatureConstants from 'constants/FeatureConstants';

import PersonalDescription from './PersonalDescription';

import './Bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="Bio">
        <div role="img" className="Bio__image" />
        <div className="Bio__details">
          <p>
            <strong>Ryan Yurkanin</strong>
          </p>
          <PersonalDescription />
          <div className="Bio__social" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ features }) => ({
  professional: features[FeatureConstants.PROFESSIONAL_BIO],
  personal: features[FeatureConstants.PERSONAL_BIO],
});

export default connect(mapStateToProps)(Bio);
