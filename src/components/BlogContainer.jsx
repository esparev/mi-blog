import React from 'react';
import '@styles/BlogContainer.less';

export default function BlogContainer({ children }) {
  return (
    <section className='blogs'>
      <h3>Recent blogposts</h3>
      <div className='blogs-container'>{children}</div>
    </section>
  );
}
