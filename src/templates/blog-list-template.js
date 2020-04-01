import React from 'react';

import Layout from '../components/Layout';
// import BlogRoll from '../../components/BlogRoll';
import BlogList from '../components/BlogList';

// export default class BlogIndexPage extends React.Component {
//   render() {
//     return (
//       <Layout>
//         <div className="container">
//           <h2 className="BlogRoll-heading">Latest Articles</h2>
//         </div>
//         <section className="section">
//           <BlogRoll />
//         </section>
//       </Layout>
//     );
//   }
// }

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <h2 className="BlogRoll-heading">Latest Articles</h2>
        </div>
        <section className="section">
          <BlogList />
        </section>
      </Layout>
    );
  }
}
