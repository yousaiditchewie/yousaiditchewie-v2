import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import BlogRoll from '../components/BlogRoll';
import Form from '../components/Form';

export const IndexPageTemplate = ({
  // image,
  heading,
  subheading,
  content,
  contentComponent,
  image
  // mainpitch,
  // description,
  // intro,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <section className="Hero">
        <div className="Hero-container container">
          <h1 className="Hero-heading">{heading}</h1>
          <h3 className="Hero-subheading">{subheading}</h3>
          <div className="Hero-image">
            <PreviewCompatibleImage imageInfo={image} />
          </div>
          <div className="Hero-cta">
            <p className="Hero-callout">
              Find out more about my upcoming book,{' '}
              <em>
                The Working Musician's Playbook: The step-by-step guide to
                achieving a fulfilling career as a freelance&nbsp;musician.
              </em>
            </p>
            <Form />
          </div>
        </div>
      </section>

      <section id="products" className="Products">
        <div className="Products-container container">
          <h2>Loop Packs</h2>
          <p>
            Over the years, I’ve recorded and composed a collection of beats and
            loops for recordings I’ve engineered or produced. They’re all USDA
            Certified Organic loops made with real recorded sounds, so you know
            they’re good.
          </p>
          <div className="Product-list">
            <div
              class="gumroad-product-embed"
              data-gumroad-product-id="HqUcV"
              data-outbound-embed="true"
            >
              <a href="https://gumroad.com/l/HqUcV">Preview or Buy</a>
            </div>
          </div>
        </div>
      </section>
      <section className="About">
        <div className="About-container container">
          <div className="Card">
            <div className="About-content">
              <PageContent content={content} />
              <Link className="button" to="/about">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="BlogRoll-section">
        <div className="container">
          <h2 className="BlogRoll-heading">Latest Articles</h2>
        </div>
        <BlogRoll />
      </section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
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
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 92) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
