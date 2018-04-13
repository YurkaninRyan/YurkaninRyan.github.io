import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Navbar from 'components/Navbar';

import FeatureConstants from 'constants/FeatureConstants';

import PepeBio from 'containers/PepeBio';
import RyanBio from 'containers/RyanBio';

import Articles from 'modules/Articles';
import GitActivity from 'modules/GitActivity';
import Repos from 'modules/Repos';
import Prompter from 'modules/Prompter';

import './App.css';

class App extends PureComponent {
  render() {
    const {
      color,
      hasNavbar,
      hasBio,
      hasGitActivity,
      hasArticles,
      hasRepos,
      hasDogBio,
    } = this.props;

    const containerClass = classNames('App', `is-theme-${color}`);

    return (
      <div ref={this.getContainer} className={containerClass}>
        {hasNavbar && <Navbar />}
        <div className="App__scroll">
          <div className="App__grid">
            <RyanBio enabled={hasBio} />
            <GitActivity enabled={hasGitActivity} />
            <Articles enabled={hasArticles} />
            <Repos enabled={hasRepos} />
            <PepeBio enabled={hasDogBio} />
          </div>
        </div>
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
  hasDogBio: features[FeatureConstants.DOG_BIO],
  hasGitActivity: features[FeatureConstants.GIT_ACTIVITY],
  hasArticles: features[FeatureConstants.ARTICLES],
  hasRepos: features[FeatureConstants.REPOS],
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  color: PropTypes.string.isRequired,
  hasNavbar: PropTypes.bool.isRequired,
  hasBio: PropTypes.bool.isRequired,
  hasDogBio: PropTypes.bool.isRequired,
  hasGitActivity: PropTypes.bool.isRequired,
  hasArticles: PropTypes.bool.isRequired,
  hasRepos: PropTypes.bool.isRequired,
};
