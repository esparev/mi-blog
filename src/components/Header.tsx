import { Link } from 'react-router-dom';
import logo from '/assets/mi-blog-logo.png';
import { Instagram, Twitter, LinkedIn } from '../components/Logos';

const Header = (): JSX.Element => {
  return (
    <header className='w-full height-[20vh] flex flex-col'>
      <section className='w-full h-[5vh] grid bg-caribbean-green'>
        <div className='flex items-center h-auto mr-12 gap-x-8 justify-self-end'>
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
      <nav className='h-[15vh] grid place-content-center grid-cols-2'>
        <section className='ml-12'>
          <Link to='/'>
            <img className='w-56 mt-3' src={logo} alt='Mi Blog' />
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
