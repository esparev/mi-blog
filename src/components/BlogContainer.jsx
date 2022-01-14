import React from 'react';
import '@styles/BlogContainer.less';

export default function BlogContainer({ children }) {
  return (
    <section className='blogs'>
      <h3></h3>
      <div className='grid-container'>{children}</div>
    </section>
  );
}
