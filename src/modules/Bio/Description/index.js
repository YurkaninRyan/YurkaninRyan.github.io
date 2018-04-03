import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FeatureConstants from 'constants/FeatureConstants';

import './Description.css';

class Description extends Component {
  render() {
    const { renderSubtext, renderList } = this.props;
    return (
      <div className="Description">
        <sub className="Description__subtext">{renderSubtext()}</sub>
        {renderList()}
      </div>
    );
  }
}

const ProfessionalList = () => (
  <ul className="Description__list">
    <li>I graduated from Temple University with my B.S in Computer Science.</li>
    <li>
      I was one of the earlier Frontend Developers at Guru, and spend my extra
      time trying to improve proccesses, learn from my fellow teammates, and
      teach as much as I can.
    </li>
    <li>
      The biggest feature I&apos;ve engineered was Guru&apos;s WYSIWYG Editor.
      It took 9 months and involved migrating our customers content from
      Markdown to a reliable JSON format.
    </li>
    <li>
      I&apos;ve worked with Ember and Vue in the past, but I feel strongest
      working with React. I&apos;ve worked with Flux on a large scale, and used
      Redux in a lot of my side projects.
    </li>
    <li>I love writing about Javascript on Medium!</li>
  </ul>
);

const PersonalList = () => (
  <ul className="Description__list">
    <li>I graduated from Temple University with my B.S in Computer Science.</li>
    <li>
      I was one of the earlier Frontend Developers at Guru, and spend my extra
      time trying to improve proccesses, learn from my fellow teammates, and
      teach as much as I can.
    </li>
    <li>
      The biggest feature I&apos;ve engineered was Guru&apos;s WYSIWYG Editor.
      It took 9 months and involved migrating our customers content from
      Markdown to a reliable JSON format.
    </li>
    <li>
      I&apos;ve worked with Ember and Vue in the past, but I feel strongest
      working with React. I&apos;ve worked with Flux on a large scale, and used
      Redux in a lot of my side projects.
    </li>
    <li>I love writing about Javascript on Medium!</li>
  </ul>
);

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
  renderList: () =>
    features[FeatureConstants.PROFESSIONAL_BIO] ? (
      <ProfessionalList />
    ) : (
      <PersonalList />
    ),
});

export default connect(mapStateToProps)(Description);

Description.propTypes = {
  renderSubtext: PropTypes.func,
  renderList: PropTypes.func,
};

Description.defaultProps = {
  renderSubtext: () => {},
  renderList: () => {},
};
