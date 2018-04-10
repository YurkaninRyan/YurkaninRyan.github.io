import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GithubCalendar from 'github-calendar';

import AnimatedCard from 'components/AnimatedCard';

import './GitActivity.css';

export default class GitActivity extends Component {
  constructor() {
    super();

    this.getRef = this.getRef.bind(this);
  }

  componentDidMount() {
    GithubCalendar(this.container, 'YurkaninRyan', {
      responsive: true,
      summary_text: '​ ',
      global_stats: false,
    });
  }

  getRef(el) {
    this.container = el;
  }

  render() {
    const { enabled } = this.props;
    return (
      <AnimatedCard className="GitActivity" in={enabled}>
        <div ref={this.getRef}>Loading Github Activity...</div>
      </AnimatedCard>
    );
  }
}

GitActivity.propTypes = {
  enabled: PropTypes.bool.isRequired,
};
