import React, { useEffect } from 'react';
import NewBlog from '@components/NewBlog';
import Contact from '@components/Contact';
import BlogItem from '@components/BlogItem';
import BlogContainer from '@components/BlogContainer';
import useInitialState from '@hooks/useInitialState';
import '@styles/Blogs.scss';

const API = 'http://localhost:3006/initialState';

const Blogs = () => {
  const initialState = useInitialState(API);

  useEffect(() => {
    document.title = 'Mi Blog • Blogs';
  });

  return (
    <>
      {initialState.blogs[0] && (
        <NewBlog
          key={initialState.blogs[0].id}
          cover={initialState.blogs[0].cover}
          title={initialState.blogs[0].title}
          description={initialState.blogs[0].description}
        />
      )}
      <BlogContainer>
        {initialState.blogs.map((item) => (
          <BlogItem
            key={item.id}
            cover={item.cover}
            title={item.title}
            description={item.description}
          />
        ))}
      </BlogContainer>
      <Contact />
    </>
  );
};

export default Blogs;
