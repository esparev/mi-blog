import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@containers/Home';
import Blogs from '@containers/Blogs';
import Blog from '@containers/Blog';
import Profile from '@containers/Profile';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='blogs' element={<Blogs />}>
          <Route path=':/blogSlug' element={<Blog />} />
        </Route>
        <Route path='profile' element={<Profile />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
