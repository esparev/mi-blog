import React, { useEffect } from 'react';
import '@styles/Blog.less';

const Blog = ({ cover, title, description }) => {
  useEffect(() => {
    document.title = 'Mi Blog • Blog';
  });
  return (
    <main className='blogpost'>
      <section className='grid-container blogpost-img-container'>
        <img src={cover} alt='Blogpost Cover' />
      </section>
      <section className='blogpost__container'>
        <div className='grid-container'>
          <h3>News</h3>
          <article>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{description}</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Blog;
