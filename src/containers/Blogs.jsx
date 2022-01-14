import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewBlog from '@components/NewBlog';
import Contact from '@components/Contact';
import BlogItem from '@components/BlogItem';
import BlogContainer from '@components/BlogContainer';
import '@styles/Blogs.less';

function Blogs(props) {
  const { blogPosts } = props;

  useEffect(() => {
    document.title = 'Mi Blog • Blogs';
  }, []);

  return (
    <>
      {blogPosts[0] && (
        <NewBlog
          key={blogPosts[0].slug}
          cover={blogPosts[0].cover}
          title={blogPosts[0].title}
          description={blogPosts[0].description}
          route={`/blogs/${blogPosts[0].slug}`}
        />
      )}
      <BlogContainer>
        {blogPosts.map((item) => (
          <BlogItem
            key={item.slug}
            slug={item.slug}
            cover={item.cover}
            title={item.title}
            description={item.description}
          />
        ))}
      </BlogContainer>
      <Contact />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    blogPosts: state.blogPosts,
  };
};

export default connect(mapStateToProps, null)(Blogs);
