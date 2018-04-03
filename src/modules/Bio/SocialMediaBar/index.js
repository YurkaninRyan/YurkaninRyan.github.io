import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Facebook from 'react-icons/lib/io/social-facebook';
import Twitter from 'react-icons/lib/io/social-twitter';
import Instagram from 'react-icons/lib/io/social-instagram';
import LinkedIn from 'react-icons/lib/io/social-linkedin';
import Github from 'react-icons/lib/io/social-github';

import FeatureConstants from 'constants/FeatureConstants';

import './SocialMediaBar.css';

const iconConfig = {
  color: 'var(--accent-color)',
  size: '24px',
};

const openInNewTab = url => () => {
  const win = window.open(url, '_blank');
  win.focus();
};

class SocialMediaBar extends Component {
  render() {
    const { icons } = this.props;
    return (
      <div className="SocialMediaBar">
        {icons.includes('facebook') && (
          <Facebook
            {...iconConfig}
            onClick={openInNewTab('https://www.facebook.com/yurkaninryan')}
          />
        )}
        {icons.includes('twitter') && (
          <Twitter
            {...iconConfig}
            onClick={openInNewTab('https://twitter.com/YurkaninRyan')}
          />
        )}
        {icons.includes('instagram') && (
          <Instagram
            {...iconConfig}
            onClick={openInNewTab('https://www.instagram.com/yurkaninryan/')}
          />
        )}
        {icons.includes('github') && (
          <Github
            {...iconConfig}
            onClick={openInNewTab('https://github.com/YurkaninRyan')}
          />
        )}
        {icons.includes('linkedin') && (
          <LinkedIn
            {...iconConfig}
            onClick={openInNewTab('https://www.linkedin.com/in/yurkaninryan/')}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ features }) => ({
  icons: features[FeatureConstants.PROFESSIONAL_BIO]
    ? ['github', 'linkedin', 'twitter']
    : ['facebook', 'twitter', 'instagram'],
});

export default connect(mapStateToProps)(SocialMediaBar);

SocialMediaBar.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
};

SocialMediaBar.defaultProps = {
  icons: [''],
};
