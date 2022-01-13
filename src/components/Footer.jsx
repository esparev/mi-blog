import React from 'react';
import '@styles/Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <p className='footer--text'>
      Website made by
      {' '}
      <a
        className='footer--link'
        href='https://www.linkedin.com/in/esparev'
        target='_blank'
        rel='noreferrer noopener'
      >
        JoseMa Esparev
      </a>
      {' '}
      | Made possible thanks to
      {' '}
      <a
        className='footer--link'
        href='https://www.platzi.com'
        target='_blank'
        rel='noreferrer noopener'
      >
        Platzi
      </a>
    </p>
  </footer>
);

export default Footer;
