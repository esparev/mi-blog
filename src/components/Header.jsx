import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/Header.less';
import logo from '@static/mi-blog-logo.png';
import facebookIcon from '@static/001-facebook.svg';
import twitterIcon from '@static/013-twitter-1.svg';
import instagramIcon from '@static/011-instagram.svg';
import linkedinIcon from '@static/010-linkedin.svg';
import youtubeIcon from '@static/008-youtube.svg';

export default function Header() {
  return (
    <header className='header'>
      <section className='socials__container'>
        <div className='socials__icons'>
          <a
            href='https://www.facebook.com/esparev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='socials__icons--icon'
              src={facebookIcon}
              alt='Facebook'
            />
          </a>
          <a
            href='https://www.twitter.com/esparev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='socials__icons--icon'
              src={twitterIcon}
              alt='Twitter'
            />
          </a>
          <a
            href='https://www.instagram.com/_esparev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='socials__icons--icon'
              src={instagramIcon}
              alt='Instagram'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/esparev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='socials__icons--icon'
              src={linkedinIcon}
              alt='LinkedIn'
            />
          </a>
          <a
            href='https://www.youtube.com/channel/UCYp2MWr3wogHpaHbkaHjxzg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='socials__icons--icon'
              src={youtubeIcon}
              alt='YouTube'
            />
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
}
