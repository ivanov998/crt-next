import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <section style={{ zIndex: 2 }}>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
