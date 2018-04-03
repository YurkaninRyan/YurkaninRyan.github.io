import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';

import Button from 'components/Button';
import ButtonRow from 'components/ButtonRow';
import Emoji from 'components/Emoji';

import FeatureConstants from 'constants/FeatureConstants';
import PromptConstants from 'constants/PromptConstants';

import { unlockFeature } from 'redux/modules/features';
import { goToPrompt } from 'redux/modules/prompts';
import { setTheme } from 'redux/modules/theme';

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
    const { onChooseTheme } = this.props;

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
          <Button style={blue} value="blue" onClick={onChooseTheme} />
          <Button style={yellow} value="yellow" onClick={onChooseTheme} />
          <Button style={pink} value="pink" onClick={onChooseTheme} />
          <Button style={green} value="green" onClick={onChooseTheme} />
          <Button style={purple} value="purple" onClick={onChooseTheme} />
          <Button style={gray} value="gray" onClick={onChooseTheme} />
        </ButtonRow>
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onChooseTheme: e =>
    dispatch(
      batchActions([
        goToPrompt(PromptConstants.BIO_PROMPT),
        setTheme(e.target.value),
        unlockFeature(FeatureConstants.NAVBAR),
      ])
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemePrompt);

ThemePrompt.propTypes = {
  onChooseTheme: PropTypes.func.isRequired,
};
