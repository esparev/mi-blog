import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '@styles/NewBlog.less';

export default function NewBlog({ cover, title, description, route }) {
  return (
    <section className='new-blog'>
      <div className='grid-container new-blog__container'>
        <div className='new-blog__image'>
          <img
            className='new-blog__image--img'
            src={cover}
            alt='Blogpost Cover'
          />
        </div>
        <div className='new-blog__info'>
          <h2 className='new-blog__info--title'>{title}</h2>
          <p className='new-blog__info--description'>{description}</p>
          <Link className='blog--button' to={route}>
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}

NewBlog.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  route: PropTypes.string,
};
