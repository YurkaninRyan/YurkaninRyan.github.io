import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PepeYurkanin from 'assets/images/PepeYurkanin.jpg';
import pepePoints from 'assets/config/pepePoints';

import Bio from 'modules/Bio';

const renderSubtext = () => 'The goodest of boys!';

export default class PepeBio extends Component {
  render() {
    return (
      <Bio
        {...this.props}
        name="Pepe!!"
        image={PepeYurkanin}
        points={pepePoints}
        renderSubtext={renderSubtext}
      />
    );
  }
}

PepeBio.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string),
  renderSubtext: PropTypes.func,
};

PepeBio.defaultProps = {
  points: [''],
  renderSubtext: () => {},
};
