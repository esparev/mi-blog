import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Blogs from '../containers/Blogs';
import Blog from '../containers/Blog';
import Profile from '../containers/Profile';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs' component={Blogs} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
