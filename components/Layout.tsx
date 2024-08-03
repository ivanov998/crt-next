import React, { ReactNode } from 'react';
import Header from '../components/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
