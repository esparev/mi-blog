import React, { useEffect } from 'react';
import '../assets/styles/components/Blog.scss';

const Blog = ({ cover, title, description }) => {
  useEffect(() => {
    document.title = 'Mi Blog • Blog';
  });
  return (
    <main className='blogpost'>
      <section className='grid-container blogpost-img-container'>
        <img src={cover} alt='Blogpost Image' />
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
