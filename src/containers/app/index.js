import React from 'react';
import AppRouter from './AppRouter';
import Header from '../../components/header';
import Footer from '../../components/footer';

const App = () => (
  <div>
    <Header/>
    <AppRouter/>
    <Footer/>
  </div>
);

export default App;