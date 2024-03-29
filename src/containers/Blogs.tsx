import { useEffect } from 'react';
import { connect } from 'react-redux';
import BlogItem from '../components/BlogItem';
import BlogContainer from '../components/BlogContainer';

const Blogs = ({ blogPosts }: BlogPosts) => {
  useEffect(() => {
    document.title = 'Mi Blog • Blogs';
  }, []);

  return (
    <>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <div>
          <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-caribbean-green'>
            Brand new
          </p>
        </div>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'>
              <defs>
                <pattern id='db164e35-2a0e-4c0f-ab05-f14edc6d4d30' x='0' y='0' width='.135' height='.30'>
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect fill='url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)' width='52' height='24' />
            </svg>
            <span className='relative'>The</span>
          </span>{' '}
          quick, brown fox jumps over a lazy dog
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa
          quae.
        </p>
      </div>
      <BlogContainer>
        {blogPosts?.map((item) => (
          <BlogItem
            key={item.slug}
            slug={item.slug}
            cover={item.cover}
            title={item.title}
            description={item.description}
          />
        ))}
      </BlogContainer>
    </>
  );
};

const mapStateToProps = (state: BlogPosts) => {
  return { blogPosts: state.blogPosts };
};

export default connect(mapStateToProps, null)(Blogs);
