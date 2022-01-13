import React from 'react';
import '../assets/styles/components/BlogContainer.scss';

const BlogContainer = ({ children }) => (
  <section className='blogs'>
    <h3></h3>
    <div className='grid-container'>{children}</div>
  </section>
);

export default BlogContainer;
