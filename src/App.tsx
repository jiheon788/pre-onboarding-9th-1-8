import React from 'react';
import Router from './Router';
import UserContextProvider from '@/contexts/UserContextProvider';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Nav />
        <Router />
        <Footer />
      </UserContextProvider>
    </div>
  );
};

export default App;
