import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({
  // image,
  heading,
  subheading,
  content,
  contentComponent,
  heroImage
  // mainpitch,
  // description,
  // intro,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <section className="Hero">
        <div className="Hero-container container">
          <div className="Hero-image">
            <PreviewCompatibleImage imageInfo={heroImage} />
          </div>
          <h1 className="Hero-heading">{heading}</h1>
          <h3 className="Hero-subheading">{subheading}</h3>
        </div>
      </section>
      <section className="About">
        <div className="About-container container">
          <div className="Card">
            <PageContent className="About-content" content={content} />
          </div>
        </div>
      </section>
      <section className="BlogRoll">
        <BlogRoll />
      </section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heroImage={frontmatter.heroImage}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        contentComponent={HTMLContent}
        content={html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        heading
        subheading
        heroImage {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
