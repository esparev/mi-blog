import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '@styles/BlogItem.less';

export default function BlogItem({ cover, title, description, slug }) {
  return (
    <article className='blog-item__container'>
      <div className='blog-item__image'>
        <img
          className='blog-item__image--img'
          src={cover}
          alt='Blogpost Cover'
        />
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
}

BlogItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
};
