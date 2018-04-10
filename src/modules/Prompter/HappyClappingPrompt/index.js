import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import happyClapping from 'assets/gifs/happy-clapping.gif';

export default class HappyClappingPrompt extends PureComponent {
  constructor() {
    super();

    this.load = false;
  }

  // We do this to make sure that the gif
  // always starts right when it shows the first time.
  componentWillReceiveProps(nextProps) {
    if (!this.props.showing && nextProps.showing) {
      this.load = true;
    }
  }

  render() {
    return (
      <img
        className="HappyClappingPrompt"
        alt="super excited clapping"
        src={this.load ? happyClapping : null}
      />
    );
  }
}

HappyClappingPrompt.propTypes = {
  showing: PropTypes.bool.isRequired,
};
