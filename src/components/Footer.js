import React from 'react';
import { Link } from 'gatsby';

import Facebook from './socialIcons/Facebook';
import Twitter from './socialIcons/Twitter';
import Instagram from './socialIcons/Instagram';

const Footer = () => {
  return (
    <footer className="Footer">
      <nav className="Footer-navigation container">
        <div className="Footer-logo">
          <Link to="/" className="Footer-item h2">
            yousaiditchewie
          </Link>
          <small>&copy;2019 all rights reserved.</small>
        </div>
        <div className="Footer-links">
          <Link className="Footer-item" to="/about">
            about
          </Link>
          <Link className="Footer-item" to="/blog">
            blog
          </Link>
          <Link className="Footer-item" to="/contact">
            contact
          </Link>
          <a
            className="Footer-item Footer-item--socialIcon"
            title="facebook"
            href="https://facebook.com/JediJake"
          >
            <Facebook />
          </a>
          <a
            className="Footer-item Footer-item--socialIcon"
            title="twitter"
            href="https://twitter.com/yousaiditchewie"
          >
            <Twitter />
          </a>
          <a
            className="Footer-item Footer-item--socialIcon"
            title="instagram"
            href="https://instagram.com/yousaiditchewie"
          >
            <Instagram />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
