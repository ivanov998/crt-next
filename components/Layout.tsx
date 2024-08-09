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
      <section style={{ zIndex: 2 }}>
        <div
          className='container-md py-4 py-xl-5 shadow-lg g-0 g-sm-5 bg-dark position-relative'
          style={{ marginTop: '-120px' }}
        >
          {children}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
