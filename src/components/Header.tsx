import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.less';
import logo from '../assets/static/mi-blog-logo.png';
import { Instagram, Twitter, LinkedIn } from '../components/Logos';

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <section className='socials__container'>
        <div className='socials__icons'>
          <a href='https://www.twitter.com/esparev' target='_blank' rel='noopener noreferrer'>
            <Twitter />
          </a>
          <a href='https://www.instagram.com/_esparev' target='_blank' rel='noopener noreferrer'>
            <Instagram />
          </a>
          <a href='https://www.linkedin.com/in/esparev' target='_blank' rel='noopener noreferrer'>
            <LinkedIn />
          </a>
        </div>
      </section>
      <nav className='nav'>
        <section className='logo__container'>
          <Link to='/'>
            <img className='logo__container--img' src={logo} alt='Mi Blog' />
          </Link>
        </section>
        <section className='about-me__container'>
          <Link className='about-me__container--link' to='/profile'>
            About me
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
