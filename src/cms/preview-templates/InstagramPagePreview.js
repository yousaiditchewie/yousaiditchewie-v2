import React from 'react';
import PropTypes from 'prop-types';
import { InstagramPageTemplate } from '../../templates/instagram-page';

const InstagramPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return <InstagramPageTemplate gallery={data.gallery} />;
  } else {
    return <div>Loading...</div>;
  }
};

InstagramPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default InstagramPagePreview;
