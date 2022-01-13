import React from 'react';
import '../assets/styles/components/Contact.scss';
import newsletterIcon from '../assets/static/013-newsletter.png';
import shareIcon from '../assets/static/020-browser.png';

const Contact = () => (
  <section className='contact'>
    <div className='contact__container'>
      <img
        className='contact__container--img'
        src={newsletterIcon}
        alt='Contact Icon'
      />
      <div>
        <a
          className='contact__container--link'
          href='mailto:esparev@hotmail.com'
        >
          Contact
        </a>
        <p className='contact__container--text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <div className='contact__container'>
      <img
        className='contact__container--img'
        src={shareIcon}
        alt='Share Icon'
      />
      <div>
        <a className='contact__container--link' href=''>
          Share
        </a>
        <p className='contact__container--text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
