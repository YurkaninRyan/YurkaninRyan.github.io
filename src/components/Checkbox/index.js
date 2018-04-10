import React, { PureComponent } from 'react';
import classNames from 'classnames';
import uuidv4 from 'uuid/v4';

import './Checkbox.css';

export default class extends PureComponent {
  constructor() {
    super();

    this.uuid = uuidv4();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { onChange, value } = this.props;

    return onChange(value);
  }

  render() {
    const { label, value, checked } = this.props;
    const checkboxClass = classNames('Checkbox', {
      'is-checked': checked,
    });

    return (
      <div className={checkboxClass}>
        <label className="Checkbox__label" htmlFor={this.uuid}>
          <div className="Checkbox__visual-checkbox" />
          <span className="Checkbox__label-text">{label}</span>
          <input
            className="Checkbox__input"
            id={this.uuid}
            value={value}
            type="checkbox"
            checked={checked}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
