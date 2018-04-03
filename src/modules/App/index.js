import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Navbar from 'components/Navbar';

import FeatureConstants from 'constants/FeatureConstants';

import Bio from 'modules/Bio';
import Prompter from 'modules/Prompter';

import './App.css';

class App extends PureComponent {
  render() {
    const { color, hasNavbar, hasBio } = this.props;
    const containerClass = classNames('App', `is-theme-${color}`);

    return (
      <div ref={this.getContainer} className={containerClass}>
        {hasNavbar && <Navbar />}
        <div className="App__grid">{hasBio && <Bio />}</div>
        <Prompter />
      </div>
    );
  }
}

const mapStateToProps = ({ theme, features }) => ({
  color: theme.color,
  hasNavbar: features[FeatureConstants.NAVBAR],
  hasBio:
    features[FeatureConstants.PROFESSIONAL_BIO] ||
    features[FeatureConstants.PERSONAL_BIO],
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  color: PropTypes.string.isRequired,
  hasNavbar: PropTypes.bool.isRequired,
  hasBio: PropTypes.bool.isRequired,
};
