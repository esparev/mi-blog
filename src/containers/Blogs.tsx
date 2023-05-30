import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewBlog from '../components/NewBlog';
import Contact from '../components/Contact';
import BlogItem from '../components/BlogItem';
import BlogContainer from '../components/BlogContainer';
import '../styles/components/Blogs.less';

const Blogs = ({ blogPosts }: BlogPosts): JSX.Element => {
  useEffect(() => {
    document.title = 'Mi Blog • Blogs';
  }, []);

  let blogPost: BlogItem = { cover: '', title: '', description: '', slug: '' };
  if (blogPosts && blogPosts.length > 0) blogPost = blogPosts[0];

  return (
    <>
      {blogPost && (
        <NewBlog
          key={blogPost.slug}
          cover={blogPost.cover}
          title={blogPost.title}
          description={blogPost.description}
          route={`/blogs/${blogPost.slug}`}
        />
      )}
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
      <Contact />
    </>
  );
};

const mapStateToProps = (state: BlogPosts) => {
  return { blogPosts: state.blogPosts };
};

export default connect(mapStateToProps, null)(Blogs);
