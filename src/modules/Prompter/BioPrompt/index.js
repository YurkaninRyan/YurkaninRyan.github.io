import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';

import Button from 'components/Button';
import ButtonRow from 'components/ButtonRow';
import Emoji from 'components/Emoji';

import FeatureConstants from 'constants/FeatureConstants';

import { unlockFeature } from 'redux/modules/features';
import { goToPrompt } from 'redux/modules/prompts';

class BioPrompt extends PureComponent {
  render() {
    const { onBoring, onAwesome } = this.props;

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
          <Button secondary onClick={onAwesome}>
            Be creative!
          </Button>
          <Button secondary onClick={onBoring}>
            Keep it strictly professional, please.
          </Button>
        </ButtonRow>
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onAwesome: () =>
    dispatch(
      batchActions([
        goToPrompt(''),
        unlockFeature(FeatureConstants.PERSONAL_BIO),
      ])
    ),
  onBoring: () =>
    dispatch(
      batchActions([
        goToPrompt(''),
        unlockFeature(FeatureConstants.PROFESSIONAL_BIO),
      ])
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(BioPrompt);

BioPrompt.propTypes = {
  onBoring: PropTypes.func.isRequired,
  onAwesome: PropTypes.func.isRequired,
};
