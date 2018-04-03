import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux';

import PromptsConfig from './PromptsConfig';

import './Prompter.css';

class Prompter extends Component {
  constructor() {
    super();

    this.renderPrompt = this.renderPrompt.bind(this);
  }

  renderPrompt(key, Prompt) {
    const { currentPrompt } = this.props;

    return (
      <Transition key={key} appear in={key === currentPrompt} timeout={10}>
        {state => (
          <div className={`Prompter is-${state}`}>
            <Prompt />
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

const mapStateToProps = ({ prompts }) => ({ currentPrompt: prompts.current });
export default connect(mapStateToProps)(Prompter);

Prompter.propTypes = {
  currentPrompt: PropTypes.string.isRequired,
};
