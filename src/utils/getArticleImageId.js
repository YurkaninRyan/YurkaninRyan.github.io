import find from 'lodash/find';

export default article =>
  find(article.previewContent.bodyModel.paragraphs, p => p.metadata).metadata
    .id;
