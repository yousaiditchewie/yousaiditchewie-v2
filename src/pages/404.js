import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <h1>OOPS, looks like you’re lost.</h1>
      <Link to="/">Head back to safety.</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
