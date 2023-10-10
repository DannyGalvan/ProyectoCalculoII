import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { BACKGROUNDS } from '../config/backgound';

const Layout = ({ children }: { children: ReactNode }) => {
  const route = useLocation();

  useEffect(() => {
    document
      .querySelector('body')
      ?.style.setProperty(
        'background-color',
        BACKGROUNDS[route.pathname] || '#C6C09C'
      );
  }, [route.pathname]);

  return (
    <div className="w-full">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
