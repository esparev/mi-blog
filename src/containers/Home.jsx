import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';

const Home = () => {
  useEffect(() => {
    document.title = 'Mi Blog';
  });
  return (
    <main className='home-main'>
      <section className='home-main__section'>
        <p className='home-main--text'>Enter so you can know more about me</p>
        <button className='home-main__button'>
          <Link className='home-main__button--link' to='/blogs'>
            Enter Now!
          </Link>
        </button>
      </section>
    </main>
  );
};

export default Home;
