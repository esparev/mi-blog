const BlogContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20'>
      <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>{children}</div>
    </div>
  );
};

export default BlogContainer;
