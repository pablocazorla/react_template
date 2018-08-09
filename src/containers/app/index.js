import React from 'react';
import AppRouter from './AppRouter';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {Helmet} from "react-helmet";
import {defaultTitle,defaultDescription} from '../../config';

const App = () => (
  <div>
    <Helmet>
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
    </Helmet>
    <Header/>
    <AppRouter/>
    <Footer/>
  </div>
);

export default App;