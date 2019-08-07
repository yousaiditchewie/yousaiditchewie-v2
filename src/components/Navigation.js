import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  useEffect(() => {
    // Component did mount effect
    setNavBarActiveClass(getLayoutClass());
  }, []);

  function getLayoutClass() {
    if (typeof window == 'undefined') {
      return '';
    }

    const pathName = window.location.pathname.replace('/', '');
    switch (pathName) {
      case 'about':
      case 'blog':
        return pathName;
      case '':
        return 'home';
      default:
        return 'not-found';
    }
  }

  return (
    <nav
      className={`Navigation container ${navBarActiveClass}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="Navigation-left">
        <Link to="/">Home (logo here)</Link>
      </div>
      <div className="Navigation-right">
        <div className="Navigation-list">
          <Link className="Navigation-item about" to="/about">
            about
          </Link>
          <Link className="Navigation-item blog" to="/blog">
            blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
