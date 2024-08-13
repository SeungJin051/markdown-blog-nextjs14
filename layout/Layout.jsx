import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
