import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Project from '../components/Project';
import Contact from '../components/Contact';
import '../styles/components/Profile.less';
import me from '../assets/img/me.png';

const Profile = ({ projects }: Projects): JSX.Element => {
  useEffect(() => {
    document.title = 'Mi Blog • Profile';
  }, []);

  return (
    <main>
      <section className='profile'>
        <div className='profile__container'>
          <div className='profile__image'>
            <img className='profile__image--img' src={me} alt='Esparev' />
          </div>
          <div className='profile__info'>
            <h1>Hey!</h1>
            <p>
              My name is JoseMa Esparza and I love making websites. Currently I am developing a professional character
              as a FullStack web developer by learning how to use the best technologies that can adapt to the specific
              needs of a website. I like things being well made that's why my work is based on applying the best
              practices and the best effort.
            </p>
          </div>
        </div>
      </section>
      <section className='projects'>
        <div className='projects-grid'>
          <h2 className='projects--title'>Projects</h2>
          <div className='projects__container'>
            {projects?.map((item) => (
              <Project key={item.id} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

const mapStateToProps = (state: Projects) => {
  return { projects: state.projects };
};

export default connect(mapStateToProps, null)(Profile);
