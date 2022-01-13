import React, { useEffect } from 'react';
import Project from '@components/Project';
import Contact from '@components/Contact';
import useInitialState from '@hooks/useInitialState';
import '@styles/Profile.less';
import me from '@img/me.png';

const API = 'http://localhost:3006/initialState';

const Profile = () => {
  const initialState = useInitialState(API);

  useEffect(() => {
    document.title = 'Mi Blog • Profile';
  });

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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              deserunt soluta voluptatum quas porro, saepe nostrum! Tempora
              minus delectus enim explicabo, porro, ducimus possimus magnam non
              est, error illum inventore? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Officiis aliquid asperiores cumque,
              repellendus, possimus consectetur doloremque veniam atque eos enim
              dolore modi omnis, perspiciatis perferendis ad dolores corrupti
              minus dolor!
            </p>
          </div>
        </div>
      </section>
      <section className='projects'>
        <div className='grid-container'>
          <h2 className='projects--title'>Projects</h2>
          <div className='projects__container'>
            {initialState.projects.map((item) => (
              <Project
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default Profile;
