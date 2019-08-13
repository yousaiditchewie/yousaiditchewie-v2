import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const IndexPageTemplate = ({
  // image,
  heading,
  subheading,
  content,
  contentComponent
  // mainpitch,
  // description,
  // intro,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div className="HomePage-container container">
      <h1 className="HomePage-heading">{heading}</h1>
      <h3 className="HomePage-subheading">{subheading}</h3>
      <PageContent className="content" content={content} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
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
      }
    }
  }
`;
