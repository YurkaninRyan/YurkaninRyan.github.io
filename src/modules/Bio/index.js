import React, { PureComponent } from 'react';

import Description from './Description';
import SocialMediaBar from './SocialMediaBar';

import './Bio.css';

export default class Bio extends PureComponent {
  render() {
    return (
      <div className="Bio">
        <div role="img" className="Bio__image" />
        <div className="Bio__details">
          <p>
            <strong>Ryan Yurkanin</strong>
          </p>
          <Description />
          <SocialMediaBar />
        </div>
      </div>
    );
  }
}
