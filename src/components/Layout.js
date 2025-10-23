// Layout.js
import React, { useEffect, useState } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerEl = document.querySelector('header');

    const updateHeight = () => {
      if (!headerEl) return;
      const h = headerEl.offsetHeight;
      setHeaderHeight(h);
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    };

    updateHeight();

    let ro;
    if (window.ResizeObserver && headerEl) {
      ro = new ResizeObserver(updateHeight);
      ro.observe(headerEl);
    } else {
      window.addEventListener('resize', updateHeight);
    }

    let mo;
    if (headerEl && window.MutationObserver) {
      mo = new MutationObserver(updateHeight);
      mo.observe(headerEl, { subtree: true, childList: true, attributes: true });
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener('resize', updateHeight);
      if (mo) mo.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main
        style={{
          paddingTop: headerHeight,
          transition: 'padding-top 160ms ease',
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
