import React from 'react';
import '../styles/components/BlogContainer.less';

const BlogContainer = ({ children }: ComponentProps): JSX.Element => {
  return (
    <section className='blogs'>
      <h3>Recent blogposts</h3>
      <div className='blogs-container'>{children}</div>
    </section>
  );
};

export default BlogContainer;
