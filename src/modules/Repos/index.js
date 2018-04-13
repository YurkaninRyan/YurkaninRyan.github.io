import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AnimatedCard from 'components/AnimatedCard';

import StatusConstants from 'constants/StatusConstants';

import Repo from 'modules/Repos/Repo';

import reposActions from 'redux/actions/repos';
import * as reposSelectors from 'redux/reducers/repos';

import './Repos.css';

class Repos extends Component {
  constructor() {
    super();

    this.fetch = this.fetch.bind(this);
    this.renderRepos = this.renderRepos.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }
  componentDidUpdate() {
    this.fetch();
  }

  fetch() {
    const { enabled, status, getRepos } = this.props;
    if (!enabled || status !== StatusConstants.NOT_LOADED) {
      return;
    }

    getRepos();
  }

  renderRepos() {
    const { repos, status } = this.props;

    if (status !== StatusConstants.LOADED) {
      return 'Loading Repos...';
    }

    return repos.map(repo => <Repo key={repo.link} {...repo} />);
  }

  render() {
    const { enabled } = this.props;
    return (
      <AnimatedCard className="Repos" in={enabled}>
        <div className="Repos__title">Open Source</div>
        {this.renderRepos()}
      </AnimatedCard>
    );
  }
}

const mapStateToProps = state => ({
  repos: reposSelectors.getRepos(state),
  status: reposSelectors.getStatus(state),
  error: reposSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  getRepos: () => dispatch(reposActions.get()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repos);

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
  enabled: PropTypes.bool.isRequired,
  getRepos: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

Repos.defaultProps = {
  repos: [],
};
