import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'components/Button';
import ButtonRow from 'components/ButtonRow';
import Emoji from 'components/Emoji';

import FeatureConstants from 'constants/FeatureConstants';

import { actions as promptActions } from 'redux/actions/prompts';

class BioPrompt extends PureComponent {
  render() {
    const { onAnswerPersonal, onAnswerProfessional } = this.props;

    return (
      <Fragment>
        <p>
          <strong>Well... that&apos;s a start right?</strong>&nbsp;<Emoji emoji="😂" />
        </p>
        <p>
          We should probably get some content on here. I guess we should start
          with who I am! Should I add some flair to my bio?&nbsp;<Emoji emoji="💁" />
        </p>
        <ButtonRow>
          <Button secondary onClick={onAnswerPersonal}>
            Be creative!
          </Button>
          <Button secondary onClick={onAnswerProfessional}>
            Keep it strictly professional, please.
          </Button>
        </ButtonRow>
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onAnswerPersonal: () =>
    dispatch(promptActions.answerBioPrompt(FeatureConstants.PERSONAL_BIO)),
  onAnswerProfessional: () =>
    dispatch(promptActions.answerBioPrompt(FeatureConstants.PROFESSIONAL_BIO)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BioPrompt);

BioPrompt.propTypes = {
  onAnswerPersonal: PropTypes.func.isRequired,
  onAnswerProfessional: PropTypes.func.isRequired,
};
