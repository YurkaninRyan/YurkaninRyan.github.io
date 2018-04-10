import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'components/Button';
import ButtonRow from 'components/ButtonRow';
import Emoji from 'components/Emoji';

import { actions as promptActions } from 'redux/actions/prompts';

const gray = {
  backgroundColor: 'hsl(0, 0%, 97%)',
  border: '1px solid lightgrey',
};

const yellow = { backgroundColor: '#FFC988', border: 'none' };
const pink = { backgroundColor: '#FFBABE', border: 'none' };
const green = { backgroundColor: '#AAD7A3', border: 'none' };
const blue = { backgroundColor: '#ABDAC9', border: 'none' };
const purple = { backgroundColor: '#C9BAD1', border: 'none' };

class ThemePrompt extends PureComponent {
  render() {
    const { onAnswerTheme } = this.props;

    return (
      <Fragment>
        <p>
          <strong>
            Nice!&nbsp;<Emoji emoji="🙏" /> I&apos;ve been saying I would do
            this for almost 2 years!
          </strong>
        </p>
        <p>
          Too bad it looks like hot trash. We need to make it fabulous.&nbsp;<Emoji emoji="💅" />{' '}
          Which of these colors do you like?
        </p>
        <ButtonRow>
          <Button style={blue} value="blue" onClick={onAnswerTheme} />
          <Button style={yellow} value="yellow" onClick={onAnswerTheme} />
          <Button style={pink} value="pink" onClick={onAnswerTheme} />
          <Button style={green} value="green" onClick={onAnswerTheme} />
          <Button style={purple} value="purple" onClick={onAnswerTheme} />
          <Button style={gray} value="gray" onClick={onAnswerTheme} />
        </ButtonRow>
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onAnswerTheme: e => dispatch(promptActions.answerThemePrompt(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemePrompt);

ThemePrompt.propTypes = {
  onAnswerTheme: PropTypes.func.isRequired,
};
