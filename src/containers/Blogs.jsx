import React, { useEffect } from 'react';
import NewBlog from '../components/NewBlog';
import BlogContainer from '../components/BlogContainer';
import BlogItem from '../components/BlogItem';
import Contact from '../components/Contact';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/components/Blogs.scss';

const API = 'http://localhost:3000/initialState';

const Blogs = () => {
  const initialState = useInitialState(API);
  useEffect(() => {
    document.title = 'Mi Blog • Blogs';
  });
  return (
    <>
      {initialState.blogs[0] && (
        <NewBlog key={initialState.blogs[0].id} {...initialState.blogs[0]} />
      )}
      <BlogContainer>
        {initialState.blogs.map((item) => (
          <BlogItem key={item.id} {...item} />
        ))}
      </BlogContainer>
      <Contact />
    </>
  );
};

export default Blogs;
