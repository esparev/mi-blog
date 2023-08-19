import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Blogs from '../containers/Blogs';
import Blog from '../containers/Blog';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='blogs/:slug' element={<Blog />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
