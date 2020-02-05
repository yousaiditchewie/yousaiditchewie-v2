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
  image,
  productCtaText,
  productList
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
          <div className="Products-intro">
            <h2>Loop Packs</h2>
            <p>
              Over the years, I’ve compiled a collection of beats and loops for
              recordings I’ve engineered or produced. They’re all USDA Certified
              Organic loops made with real recorded sounds, so you know they’re
              good.
            </p>
          </div>
          <div className="Products-list">
            {productList.map(item => (
              <div
                key={item.id}
                class="Product gumroad-product-embed"
                data-gumroad-product-id={item.id}
                data-outbound-embed="true"
                data-gumroad-single-product="true"
              >
                <h3 className="Product-name">{item.name}</h3>
                <p className="Product-description">{item.description}</p>
                <a
                  className="Product-link"
                  href={`https://gumroad.com/l/${item.id}`}
                >
                  {productCtaText}
                </a>
              </div>
            ))}
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
  productCtaText: PropTypes.string,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string
    })
  ),
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
        productCtaText={frontmatter.productCtaText}
        productList={frontmatter.productList}
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
        productCtaText
        productList {
          name
          description
          id
        }
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
