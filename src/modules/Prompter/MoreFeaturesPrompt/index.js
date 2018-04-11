import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'components/Button';
import ButtonRow from 'components/ButtonRow';
import Checkbox from 'components/Checkbox';
import CheckboxColumn from 'components/CheckboxColumn';

import FeatureConstants from 'constants/FeatureConstants';

import prompts from 'redux/actions/prompts';

function renderPersonalTitle() {
  return (
    <p>
      <strong>
        Going with a more personal touch and talking about the REAL Ryan
        Yurkanin was a great idea!
      </strong>
    </p>
  );
}

function renderProfessionalTitle() {
  return (
    <p>
      <strong>
        Going the professional route was a splendid idea. Can&apos;t forget to
        show off my skills!
      </strong>
    </p>
  );
}

class MoreFeaturesPrompt extends PureComponent {
  constructor() {
    super();

    this.state = {
      checkboxes: {
        [FeatureConstants.DOG_BIO]: false,
        [FeatureConstants.GIT_ACTIVITY]: false,
        [FeatureConstants.OPEN_SOURCE]: false,
        [FeatureConstants.ARTICLES]: false,
      },
    };

    this.handleChecked = this.handleChecked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChecked(value) {
    return this.setState(state => ({
      checkboxes: {
        ...state.checkboxes,
        [value]: !state.checkboxes[value],
      },
    }));
  }

  handleSubmit() {
    const { onAddMoreFeatures } = this.props;
    const { checkboxes } = this.state;

    onAddMoreFeatures(checkboxes);
  }

  render() {
    const { hasPersonalBio } = this.props;
    const { checkboxes } = this.state;

    return (
      <Fragment>
        {hasPersonalBio ? renderPersonalTitle() : renderProfessionalTitle()}
        <p className="Prompter--MoreFeaturesPrompt__last-paragraph">
          It still looks pretty empty. Do you think any of these would be useful
          to add?
        </p>
        <CheckboxColumn>
          <Checkbox
            label="A chart showing how often I code"
            value={FeatureConstants.GIT_ACTIVITY}
            checked={checkboxes[FeatureConstants.GIT_ACTIVITY]}
            onChange={this.handleChecked}
          />
          <Checkbox
            label="A collection of some of the article I've written"
            value={FeatureConstants.ARTICLES}
            checked={checkboxes[FeatureConstants.ARTICLES]}
            onChange={this.handleChecked}
          />
          <Checkbox
            label="My open source projects or projects I help maintain"
            value={FeatureConstants.OPEN_SOURCE}
            checked={checkboxes[FeatureConstants.OPEN_SOURCE]}
            onChange={this.handleChecked}
          />
          <Checkbox
            label="A picture of my dog Pepe"
            value={FeatureConstants.DOG_BIO}
            checked={checkboxes[FeatureConstants.DOG_BIO]}
            onChange={this.handleChecked}
          />
        </CheckboxColumn>
        <ButtonRow>
          <Button secondary onClick={this.handleSubmit}>
            That should do!
          </Button>
        </ButtonRow>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  hasPersonalBio: state.features[FeatureConstants.PERSONAL_BIO],
});

const mapDispatchToProps = dispatch => ({
  onAddMoreFeatures: features => dispatch(prompts.answerMoreFeatures(features)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoreFeaturesPrompt);

MoreFeaturesPrompt.propTypes = {
  hasPersonalBio: PropTypes.bool.isRequired,
  onAddMoreFeatures: PropTypes.func.isRequired,
};
