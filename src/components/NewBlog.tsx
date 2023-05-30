import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NewBlog.less';

const NewBlog = ({ cover, title, description, route }: NewBlog): JSX.Element => {
  return (
    <section className='new-blog'>
      <div className='new-blog__container'>
        <div className='new-blog__image'>
          <img className='new-blog__image--img' src={cover} alt='Blogpost Cover' />
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
};

export default NewBlog;
