import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = 'Mi Blog';
  }, []);

  return (
    <main className='h-[80vh] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl'>
        <div className='text-center'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-900 uppercase rounded-full bg-caribbean-green'>
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
                    <pattern id='b039bae0-fdd5-4311-b198-8557b064fce0' x='0' y='0' width='.135' height='.30'>
                      <circle cx='1' cy='1' r='.7' />
                    </pattern>
                  </defs>
                  <rect fill='url(#b039bae0-fdd5-4311-b198-8557b064fce0)' width='52' height='24' />
                </svg>
                <span className='relative'>The</span>
              </span>{' '}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque
              ipsa quae.
            </p>
          </div>
          <div className='flex items-center justify-center w-full mb-4 md:flex-row md:px-16'>
            <Link
              to='/blogs'
              className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md md:w-auto bg-caribbean-green hover:bg-caribbean-green-dark focus:shadow-outline focus:outline-none'>
              Enter now
            </Link>
          </div>
          <p className='max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-16'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
