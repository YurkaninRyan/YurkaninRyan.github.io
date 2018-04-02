import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import prompts from 'modules/prompts';

import './Prompter.css';

class Prompter extends Component {
  render() {
    return <div className="Prompter">{this.props.children}</div>;
  }
}

function mapStateToProps(state) {
  const Prompt = prompts[state.prompts.current];

  return {
    children: <Prompt />,
  };
}

export default connect(mapStateToProps)(Prompter);

Prompter.propTypes = {
  children: PropTypes.node.isRequired,
};
