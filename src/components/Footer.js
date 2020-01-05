import React from 'react';
import { Link } from 'gatsby';

import Facebook from './socialIcons/Facebook';
import Twitter from './socialIcons/Twitter';
import Instagram from './socialIcons/Instagram';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <nav className="Footer-navigation container">
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
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            className="Footer-item Footer-item--socialIcon"
            title="twitter"
            href="https://twitter.com/yousaiditchewie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            className="Footer-item Footer-item--socialIcon"
            title="instagram"
            href="https://instagram.com/yousaiditchewie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </div>
        <div className="Footer-logo">
          <Link to="/" className="Footer-item">
            yousaiditchewie
          </Link>
          <small>&copy;{currentYear} all rights reserved.</small>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
