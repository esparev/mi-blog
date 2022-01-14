import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { seeBlogPost } from '../actions/index.action';
import '@styles/Blog.less';

function Blog(props) {
  const { currentBlogPost } = props;
  const { slug } = useParams();

  console.log(slug);

  useEffect(() => {
    document.title = `Mi Blog • ${currentBlogPost.title}`;
    props.seeBlogPost(slug);
  }, [currentBlogPost.title]);

  return (
    <main className='blogpost'>
      <section className='grid-container blogpost-img-container'>
        <img src={currentBlogPost.cover} alt='Blogpost Cover' />
      </section>
      <section className='blogpost__container'>
        <div className='grid-container'>
          <h3>News</h3>
          <article>
            <h1>{currentBlogPost.title}</h1>
            <p>{currentBlogPost.description}</p>
            <p>{currentBlogPost.description}</p>
          </article>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    currentBlogPost: state.currentBlogPost,
  };
};

const mapDispatchToProps = {
  seeBlogPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
