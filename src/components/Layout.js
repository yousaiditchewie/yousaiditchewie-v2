import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';
import MobileNav from './MobileNav';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

import './main.scss';
import SubscribeForm from './SubscribeForm';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const [layoutClass, setLayoutClass] = useState('initial');
  const getLayoutClass = () => {
    if (typeof window == 'undefined') {
      return '';
    }

    const pathName = window.location.pathname.replace('/', '');
    switch (pathName) {
      case 'AboutPage':
      case 'BlogPage':
        return pathName;
      case '':
        return 'HomePage';
      default:
        return 'not-found';
    }
  };

  useEffect(() => {
    setLayoutClass(getLayoutClass());
  }, []);
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navigation />
      <main className={layoutClass}>{children}</main>
      <SubscribeForm />
      <Footer />
      <MobileNav />
    </div>
  );
};

export default TemplateWrapper;
