import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'components/Button';
import ButtonRow from 'components/ButtonRow';
import Emoji from 'components/Emoji';

import PromptConstants from 'constants/PromptConstants';

import { goToPrompt } from 'redux/modules/prompts';

const handleRudePerson = () => window.history.back();

class InitialGreetingPrompt extends PureComponent {
  render() {
    const { onAccept } = this.props;

    return (
      <Fragment>
        <p>
          <strong>Oh wow, a visitor!</strong>&nbsp;<Emoji emoji="👋" />
        </p>
        <p>
          This is awkward... there&apos;s nothing here! Could you lend a
          hand?&nbsp;<Emoji emoji="😅" />
        </p>
        <ButtonRow>
          <Button secondary onClick={handleRudePerson}>
            Nah.
          </Button>
          <Button onClick={onAccept}>...Sure?</Button>
        </ButtonRow>
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onAccept: () => dispatch(goToPrompt(PromptConstants.THEME)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  InitialGreetingPrompt
);

InitialGreetingPrompt.propTypes = {
  onAccept: PropTypes.func.isRequired,
};
