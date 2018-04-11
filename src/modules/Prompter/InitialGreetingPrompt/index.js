import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'components/Button';
import ButtonRow from 'components/ButtonRow';
import Emoji from 'components/Emoji';

import prompts from 'redux/actions/prompts';

const handleRudePerson = () => window.history.back();

class InitialGreetingPrompt extends PureComponent {
  render() {
    const { onAnswer } = this.props;

    return (
      <Fragment>
        <p>
          <strong>Oh wow, a visitor!</strong>&nbsp;<Emoji emoji="👋" />
        </p>
        <p>
          This is awkward... there&apos;s nothing here! Would you mind if we
          built it right now?&nbsp;<Emoji emoji="😅" />
        </p>
        <ButtonRow>
          <Button secondary onClick={handleRudePerson}>
            Nah.
          </Button>
          <Button onClick={onAnswer}>...Sure?</Button>
        </ButtonRow>
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onAnswer: () => dispatch(prompts.answerInitialGreeting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  InitialGreetingPrompt
);

InitialGreetingPrompt.propTypes = {
  onAnswer: PropTypes.func.isRequired,
};
