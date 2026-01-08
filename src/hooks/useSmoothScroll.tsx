import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToElement = useCallback((elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleNavigation = useCallback((target: string, isHomepage: boolean = true) => {
    if (isHomepage && location.pathname === '/') {
      scrollToElement(target);
    } else if (isHomepage) {
      navigate('/', { state: { scrollTo: target } });
    } else {
      navigate(target);
    }
  }, [location.pathname, navigate, scrollToElement]);

  return { scrollToElement, handleNavigation };
};

export default useSmoothScroll;
