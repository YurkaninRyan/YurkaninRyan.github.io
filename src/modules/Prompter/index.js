import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux';

import PromptsConfig from 'modules/Prompter/PromptsConfig';

import { getPrompt } from 'redux/reducers/prompts';

import './Prompter.css';

class Prompter extends Component {
  constructor() {
    super();

    this.renderPrompt = this.renderPrompt.bind(this);
  }

  renderPrompt(key, Prompt) {
    const { prompt } = this.props;

    return (
      <Transition key={key} appear in={key === prompt} timeout={10}>
        {state => (
          <div className={`Prompter is-${state}`}>
            <Prompt showing={key === prompt} />
          </div>
        )}
      </Transition>
    );
  }

  render() {
    return (
      <Fragment>
        {Object.entries(PromptsConfig).map(([key, Prompt]) =>
          this.renderPrompt(key, Prompt)
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ prompt: getPrompt(state) });
export default connect(mapStateToProps)(Prompter);

Prompter.propTypes = {
  prompt: PropTypes.string.isRequired,
};
