import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/BlogItem.less';

const BlogItem = ({ cover, title, description, slug }: BlogItem): JSX.Element => {
  return (
    <article className='blog-item__container'>
      <div className='blog-item__image'>
        <img className='blog-item__image--img' src={cover} alt='Blogpost Cover' />
      </div>
      <div className='blog-item__info'>
        <h3 className='blog-item__info--title'>{title}</h3>
        <p className='blog-item__info--description'>{description}</p>
        <Link className='blog--button' to={`/blogs/${slug}`}>
          Read more
        </Link>
      </div>
    </article>
  );
};

export default BlogItem;
