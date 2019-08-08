import React, { useState } from 'react';
import { Link } from 'gatsby';

const MobileNav = () => {
  const [activeClass, setActiveClass] = useState('');

  function toggleMenu() {
    if (activeClass === '') {
      setActiveClass('is-open');
    } else {
      setActiveClass('');
    }
  }

  return (
    <nav
      className={`MobileNav ${activeClass}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="MobileNav-slideup">
        <div className="MobileNav-linkWrapper">
          <Link className="MobileNav-link" to="/about">
            about
          </Link>
          <Link className="MobileNav-link" to="/blog">
            blog
          </Link>
        </div>
      </div>
      <div className="MobileNav-bottom container">
        <Link to="/" className="h2">
          yousaiditchewie
        </Link>
        {/* Hamburger menu */}
        <div className="MobileNav-toggleWrapper">
          <div
            className="MobileNav-toggle"
            data-target="navMenu"
            onClick={() => toggleMenu()}
          >
            <div className="MobileNav-toggle--middleLine" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
