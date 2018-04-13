import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AnimatedCard from 'components/AnimatedCard';

import StatusConstants from 'constants/StatusConstants';

import Article from 'modules/Articles/Article';

import articlesActions from 'redux/actions/articles';
import * as articlesSelectors from 'redux/reducers/articles';

import getArticleImageId from 'utils/getArticleImageId';
import getArticlePostURL from 'utils/getArticlePostURL';

import './Articles.css';

class Articles extends Component {
  constructor() {
    super();

    this.fetch = this.fetch.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }
  componentDidUpdate() {
    this.fetch();
  }

  fetch() {
    const { enabled, status, getArticles } = this.props;
    if (!enabled || status !== StatusConstants.NOT_LOADED) {
      return;
    }

    getArticles();
  }

  renderArticles() {
    const { articles, status } = this.props;

    if (status !== StatusConstants.LOADED) {
      return 'Loading Articles...';
    }

    return articles.map(article => (
      <Article
        key={article.slug}
        title={article.title}
        preview={article.content.subtitle}
        image={getArticleImageId(article)}
        url={getArticlePostURL(article)}
      />
    ));
  }

  render() {
    const { enabled } = this.props;
    return (
      <AnimatedCard className="Articles" in={enabled}>
        <div className="Articles__title">Recent Articles</div>
        {this.renderArticles()}
      </AnimatedCard>
    );
  }
}

const mapStateToProps = state => ({
  articles: articlesSelectors.getArticles(state),
  status: articlesSelectors.getStatus(state),
  error: articlesSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(articlesActions.get()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  enabled: PropTypes.bool.isRequired,
  getArticles: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

Articles.defaultProps = {
  articles: [],
};
