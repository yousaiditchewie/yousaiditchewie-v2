import React from 'react';
import { graphql } from 'gatsby';

class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return <div key={node.fields.slug}>{title}</div>;
        })}
      </>
    );
  }
}
export default () => (
  <StaticQuery
    query={graphql`
      query blogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: $limit
          skip: $skip
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogList data={data} count={count} />}
  />
);
