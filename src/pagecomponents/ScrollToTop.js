import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This function is called on App.js. It scrolls to the top of the page every time I go to a new page. I need it because I am doing 100vh
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
