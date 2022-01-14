import React from 'react';
import '@styles/Contact.less';
import newsletterIcon from '@static/013-newsletter.png';
import shareIcon from '@static/020-browser.png';

export default function Contact() {
  return (
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
}
