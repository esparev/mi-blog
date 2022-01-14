import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Contact from '@components/Contact';
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
      <section className='blogpost__image'>
        <img src={currentBlogPost.cover} alt='Blogpost Cover' />
      </section>
      <section className='blogpost__container'>
        <div className='blogpost__grid'>
          <h3>News</h3>
          <article>
            <h1>{currentBlogPost.title}</h1>
            <p>{currentBlogPost.description}</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              illo vitae minima, numquam modi esse blanditiis, maxime nostrum
              facere earum qui rem sequi commodi ab velit nesciunt dolore
              consequatur optio. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ullam laboriosam sit officiis architecto! Ad
              vero enim, repudiandae sint, magnam inventore, incidunt dolorem
              similique quis libero sed beatae ut porro? Cum. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Dolorum, reprehenderit qui
              magni delectus officiis voluptas praesentium sequi distinctio
              placeat, harum, consequuntur temporibus amet perspiciatis illum
              unde quisquam dicta eius. Qui! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error sed odit, neque voluptatum,
              reiciendis dolorum voluptas quisquam cumque ex ipsam, harum
              temporibus illum. Aliquid voluptates quia velit iure, culpa totam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatibus ducimus, illo esse vero nam nemo dolores sequi
              reprehenderit totam, corrupti consectetur natus quidem ex libero!
              Ex fugiat illum earum.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              eius velit voluptatibus voluptatem commodi reprehenderit cum
              cupiditate quos adipisci quod vitae quibusdam aperiam ducimus
              quidem doloremque, ratione tempora facere eum? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ab possimus minus
              laudantium! Illum unde consequuntur libero ducimus deleniti cum
              aperiam veniam deserunt provident? Praesentium, quos. Porro dicta
              libero dolores rem! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Tempore voluptas dolorum itaque debitis esse
              voluptatum! Quia odio sit, fugiat omnis magnam fugit accusamus,
              pariatur nesciunt minima esse vel deleniti veniam. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Architecto optio
              dolor ab fugiat blanditiis hic suscipit, nam asperiores minus
              modi, dignissimos nemo mollitia deleniti distinctio rem molestiae!
              Sed, minima deleniti! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Dicta, quisquam voluptates, pariatur tempora
              commodi molestiae laudantium maiores hic tenetur ipsam doloremque
              debitis. Eveniet deleniti, laudantium recusandae quos molestiae
              voluptate! Adipisci.
            </p>
          </article>
        </div>
      </section>
      <Contact />
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
