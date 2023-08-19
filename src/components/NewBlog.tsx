import { Link } from 'react-router-dom';

const NewBlog = ({ cover, title, description, route }: NewBlog) => {
  return (
    <section className='grid px-12 py-10 place-content-center bg-light-gray'>
      <div className='grid max-w-4xl grid-cols-2 place-content-center'>
        <div className='w-full'>
          <img className='new-blog__image--img' src={cover} alt='Blogpost Cover' />
        </div>
        <div className='pl-7'>
          <h2 className='new-blog__info--title'>{title}</h2>
          <p className='mt-5 mb-8'>{description}</p>
          <Link className='blog--button' to={route}>
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewBlog;
