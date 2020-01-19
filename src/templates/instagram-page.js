import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

export const InstagramPageTemplate = ({ gallery }) => {
  return (
    <section className="Instagram container">
      <Gallery imageList={gallery} />
    </section>
  );
};

InstagramPageTemplate.propTypes = {
  gallery: PropTypes.array
};

const InstagramPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <h1
        className="container"
        style={{
          fontSize: '1rem',
          textAlign: 'center'
        }}
      >
        Click an image to read more.
      </h1>
      <InstagramPageTemplate gallery={post.frontmatter.gallery} />
    </Layout>
  );
};

InstagramPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default InstagramPage;

export const InstagramPageQuery = graphql`
  query InstagramPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        gallery {
          image {
            childImageSharp {
              fluid(maxWidth: 1040, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          linkUrl
        }
      }
    }
  }
`;
