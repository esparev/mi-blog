import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { seeBlogPost } from '../actions/index.action';

const Blog = (props: Blog) => {
  const { currentBlogPost } = props;
  const { slug } = useParams();

  useEffect(() => {
    document.title = `Mi Blog • ${currentBlogPost.title}`;
    props.seeBlogPost(slug);
  }, [currentBlogPost.title]);

  return (
    <main className='pb-10'>
      <div className='max-w-3xl px-4 pt-6 pb-12 mx-auto lg:pt-10 sm:px-6 lg:px-8'>
        <div className='max-w-2xl'>
          <div className='flex items-center justify-between mb-6'>
            <div className='flex w-full sm:items-center gap-x-5 sm:gap-x-3'>
              <div className='flex-shrink-0'>
                <img
                  className='w-12 h-12 rounded-full'
                  src='https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
                  alt='Image Description'
                />
              </div>

              <div className='grow'>
                <div className='grid gap-2 sm:flex sm:justify-between sm:items-center'>
                  <div>
                    <div className='hs-tooltip inline-block [--trigger:hover] [--placement:bottom]'>
                      <div className='block text-left cursor-pointer hs-tooltip-toggle sm:mb-1'>
                        <span className='font-semibold text-gray-800'>Leyla Ludic</span>
                      </div>
                    </div>

                    <ul className='text-xs text-gray-500'>
                      <li className='relative inline-block pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full'>
                        Jul 13
                      </li>
                      <li className='relative inline-block pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full'>
                        8 min read
                      </li>
                    </ul>
                  </div>

                  <div>
                    <button
                      type='button'
                      className='py-1.5 px-2.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-caribbean-green transition-all text-xs sm:text-sm'>
                      <svg
                        className='w-3.5 h-3.5'
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        viewBox='0 0 16 16'>
                        <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                      </svg>
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-5 md:space-y-8'>
            <div className='space-y-3'>
              <h2 className='text-2xl font-bold md:text-3xl'>Announcing a free plan for small teams</h2>

              <p className='text-lg text-gray-800'>
                At preline, our mission has always been focused on bringing openness and transparency to the design
                process. We've always believed that by providing a space where designers can share ongoing work not only
                empowers them to make better products, it also helps them grow.
              </p>
            </div>

            <p className='text-lg text-gray-800'>
              We're proud to be a part of creating a more open culture and to continue building a product that supports
              this vision.
            </p>

            <figure>
              <img
                className='object-cover w-full rounded-xl'
                src='https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                alt='Image Description'
              />
              <figcaption className='mt-3 text-sm text-center text-gray-500'>A woman sitting at a table.</figcaption>
            </figure>

            <p className='text-lg text-gray-800'>
              As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook,
              and Intercom bring their designers closer together to create amazing things. We've also learned that when
              the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.
            </p>

            <p className='text-lg text-gray-800'>
              That's why we are excited to share that we now have a{' '}
              <a className='font-medium text-caribbean-green-dark decoration-2 hover:underline' href='#'>
                free version of Preline
              </a>
              , which will allow individual designers, startups and other small teams a chance to create a culture of
              openness early on.
            </p>

            <blockquote className='p-4 text-center sm:px-7'>
              <p className='text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal'>
                To say that switching to Preline has been life-changing is an understatement. My business has tripled
                and I got my life back.
              </p>
              <p className='mt-5 text-gray-800'>Nicole Grazioso</p>
            </blockquote>

            <figure>
              <img
                className='object-cover w-full rounded-xl'
                src='https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                alt='Image Description'
              />
              <figcaption className='mt-3 text-sm text-center text-gray-500'>
                A man and a woman looking at a cell phone.
              </figcaption>
            </figure>

            <div className='space-y-3'>
              <h3 className='text-2xl font-semibold'>Bringing the culture of sharing to everyone</h3>

              <p className='text-lg text-gray-800'>
                We know the power of sharing is real, and we want to create an opportunity for everyone to try Preline
                and explore how transformative open communication can be. Now you can have a team of one or two
                designers and unlimited spectators (think PMs, management, marketing, etc.) share work and explore the
                design process earlier.
              </p>
            </div>

            <ul className='pl-5 space-y-5 text-lg text-gray-800 list-disc list-outside'>
              <li className='pl-2'>
                Preline allows us to collaborate in real time and is a really great way for leadership on the team to
                stay up-to-date with what everybody is working on,"{' '}
                <a className='font-medium text-caribbean-green-dark decoration-2 hover:underline' href='#'>
                  said
                </a>{' '}
                Stewart Scott-Curran, Intercom's Director of Brand Design.
              </li>
              <li className='pl-2'>
                Preline opened a new way of sharing. It's a persistent way for everyone to see and absorb each other's
                work," said David Scott, Creative Director at{' '}
                <a className='font-medium text-caribbean-green-dark decoration-2 hover:underline' href='#'>
                  Eventbrite
                </a>
                .
              </li>
            </ul>

            <p className='text-lg text-gray-800'>
              Small teams and individual designers need a space where they can watch the design process unfold, both for
              themselves and for the people they work with – no matter if it's a fellow designer, product manager,
              developer or client. Preline allows you to invite more people into the process, creating a central place
              for conversation around design. As those teams grow, transparency and collaboration becomes integrated in
              how they communicate and work together.
            </p>

            <div>
              <a
                className='m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200'
                href='#'>
                Plan
              </a>
              <a
                className='m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200'
                href='#'>
                Web development
              </a>
              <a
                className='m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200'
                href='#'>
                Free
              </a>
              <a
                className='m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200'
                href='#'>
                Team
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='sticky inset-x-0 text-center bottom-6'>
        <div className='inline-block px-4 py-3 bg-white rounded-full shadow-md'>
          <div className='flex items-center gap-x-1.5'>
            <div className='inline-block hs-tooltip'>
              <button
                type='button'
                className='flex items-center text-sm text-gray-500 hs-tooltip-toggle gap-x-2 hover:text-gray-800'>
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'>
                  <path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />
                </svg>
                875
                <span
                  className='absolute z-10 invisible inline-block px-2 py-1 text-xs font-medium text-white transition-opacity bg-gray-900 rounded-md shadow-sm opacity-0 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible'
                  role='tooltip'>
                  Like
                </span>
              </button>
            </div>

            <div className='block h-3 mx-3 border-r border-gray-300'></div>

            <div className='inline-block hs-tooltip'>
              <button
                type='button'
                className='flex items-center text-sm text-gray-500 hs-tooltip-toggle gap-x-2 hover:text-gray-800'>
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'>
                  <path d='M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z' />
                </svg>
                16
                <span
                  className='absolute z-10 invisible inline-block px-2 py-1 text-xs font-medium text-white transition-opacity bg-gray-900 rounded-md shadow-sm opacity-0 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible'
                  role='tooltip'>
                  Comment
                </span>
              </button>
            </div>

            <div className='block h-3 mx-3 border-r border-gray-300'></div>

            <div className='relative inline-flex hs-dropdown'>
              <button
                type='button'
                id='blog-article-share-dropdown'
                className='flex items-center text-sm text-gray-500 hs-dropdown-toggle gap-x-2 hover:text-gray-800'>
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'>
                  <path
                    fillRule='evenodd'
                    d='M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z'
                  />
                  <path
                    fillRule='evenodd'
                    d='M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z'
                  />
                </svg>
                Share
              </button>
              <div
                className='hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2'
                aria-labelledby='blog-article-share-dropdown'>
                <a
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400'
                  href='#'>
                  <svg
                    className='w-4 h-4'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z' />
                    <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z' />
                  </svg>
                  Copy link
                </a>
                <div className='my-2 border-t border-gray-600'></div>
                <a
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400'
                  href='#'>
                  <svg
                    className='w-4 h-4'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                  </svg>
                  Share on Twitter
                </a>
                <a
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400'
                  href='#'>
                  <svg
                    className='w-4 h-4'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                  </svg>
                  Share on Facebook
                </a>
                <a
                  className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400'
                  href='#'>
                  <svg
                    className='w-4 h-4'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                  </svg>
                  Share on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state: Blog) => {
  return { currentBlogPost: state.currentBlogPost };
};

const mapDispatchToProps = { seeBlogPost };

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
