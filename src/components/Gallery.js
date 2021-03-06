import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const GalleryThumbnail = ({ item, idx }) => {
  return (
    <Link to={item.linkUrl} className="Gallery-image">
      <div
        id={`gallery-image-${idx + 1}`}
        key={idx}
        className="Gallery-thumbnail"
        style={{
          backgroundImage: `url(${item.image.childImageSharp.fluid.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="Gallery-thumbnailFrame" />
      </div>
    </Link>
  );
};

const Gallery = ({ imageList }) => (
  <div className="Gallery">
    {imageList.reverse().map((item, idx) => (
      <GalleryThumbnail key={idx} item={item} idx={idx} />
    ))}
  </div>
);

Gallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string
    })
  )
};

export default Gallery;
