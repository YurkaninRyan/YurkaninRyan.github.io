import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Navbar from 'components/Navbar';
import Prompter from 'components/Prompter';

import FeatureConstants from 'constants/FeatureConstants';

import Bio from 'modules/Bio';

import './App.css';

class App extends PureComponent {
  render() {
    const { color, hasNavbar } = this.props;
    const containerClass = classNames('App', `is-theme-${color}`);

    return (
      <div ref={this.getContainer} className={containerClass}>
        {hasNavbar && <Navbar />}
        <Prompter />
        <Bio />
      </div>
    );
  }
}

const mapStateToProps = ({ theme, features }) => ({
  color: theme.color,
  hasNavbar: features[FeatureConstants.NAVBAR],
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  color: PropTypes.string.isRequired,
  hasNavbar: PropTypes.bool.isRequired,
};
