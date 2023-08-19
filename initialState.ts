const initialState = {
  currentBlogPost: {},
  blogPosts: [
    {
      id: 1,
      title: 'Old Mini Computer Recreated With Raspberry Pi 4',
      slug: 'computer-recreated-with-raspberry-pi-4',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt soluta voluptatum quas porro, saepe nostrum! Tempora minus delectus enim explicabo, porro, ducimus possimus magnam non est, error illum inventore',
      cover:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      date: 'February 21, 2019',
    },
    {
      id: 2,
      title: 'Top 10 Thriller Books',
      slug: 'top-10-thriller-books',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt soluta voluptatum quas porro, saepe nostrum! Tempora minus delectus enim explicabo, porro, ducimus possimus magnam non est, error illum inventore',
      cover:
        'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8MjM0MjY0M3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      date: 'January 26, 2018',
    },
    {
      id: 3,
      title: "Alexa's New Worthy Rival?",
      slug: 'alexa-new-worthy-rival',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt soluta voluptatum quas porro, saepe nostrum! Tempora minus delectus enim explicabo, porro, ducimus possimus magnam non est, error illum inventore',
      cover:
        'https://images.unsplash.com/photo-1525004277915-9e455d05ca5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQyNjQzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      date: 'April 28, 2018',
    },
    {
      id: 4,
      title: 'Why Learn Programming?',
      slug: 'why-learn-programming',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt soluta voluptatum quas porro, saepe nostrum! Tempora minus delectus enim explicabo, porro, ducimus possimus magnam non est, error illum inventore',
      cover:
        'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTh8MjM0MjY0M3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      date: 'January 21, 2019',
    },
    {
      id: 5,
      title: 'The Face Behind Wellow',
      slug: 'the-face-behind-wellow',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt soluta voluptatum quas porro, saepe nostrum! Tempora minus delectus enim explicabo, porro, ducimus possimus magnam non est, error illum inventore',
      cover:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODl8MjM0MjY0M3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      date: 'October 13, 2021',
    },
    {
      id: 6,
      title: 'Work Hard or Work Smart? Or Both?!',
      slug: 'work-hard-or-work-smart-or-both',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt soluta voluptatum quas porro, saepe nostrum! Tempora minus delectus enim explicabo, porro, ducimus possimus magnam non est, error illum inventore',
      cover:
        'https://images.unsplash.com/photo-1468971050039-be99497410af?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzh8MjA1NDQ1Nnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      date: 'July 19, 2016',
    },
    {
      id: 7,
      title: 'How To Filmmake With Only Your Phone',
      slug: 'how-to-filmmake-with-only-your-phone',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt soluta voluptatum quas porro, saepe nostrum! Tempora minus delectus enim explicabo, porro, ducimus possimus magnam non est, error illum inventore',
      cover:
        'https://images.unsplash.com/photo-1530712024539-ecd73dfb1c9d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MzU1MzcwNHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      date: 'July 4, 2018',
    },
    {
      id: 8,
      title: 'Is The Xbox Series X|S Really Worth It?',
      slug: 'is-the-xbox-series-x-s-really-worth-it',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt soluta voluptatum quas porro, saepe nostrum! Tempora minus delectus enim explicabo, porro, ducimus possimus magnam non est, error illum inventore',
      cover:
        'https://images.unsplash.com/photo-1614294148960-9aa740632a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      date: 'March 3, 2021',
    },
    {
      id: 9,
      title: 'Vintage Looking Tech For Collection',
      slug: 'vintage-looking-tech-for-collection',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt soluta voluptatum quas porro, saepe nostrum! Tempora minus delectus enim explicabo, porro, ducimus possimus magnam non est, error illum inventore',
      cover:
        'https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80',
      date: 'October 18, 2019',
    },
    {
      id: 10,
      title: 'The Beauty Of A Car',
      slug: 'the-beauty-of-a-car',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt soluta voluptatum quas porro, saepe nostrum! Tempora minus delectus enim explicabo, porro, ducimus possimus magnam non est, error illum inventore',
      cover:
        'https://images.unsplash.com/photo-1530981279185-9f0960715267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      date: 'July 7, 2018',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'PlatziVideo',
      description:
        'A place to watch online videos from Platzi!\nMade using React technologies like React Router & Redux, optimized for compatibility with every browser',
    },
    {
      id: 2,
      title: 'Batatabit',
      description:
        "Cryptocurrency landing page. The next revolution in cryptocurrency exchange.\nMade using JavaScript's Framework React.js, with mobile first design and optimized code.",
    },
    {
      id: 3,
      title: 'Eyefind.info',
      description:
        "The search engine that knows everything about you, mostly because it drives around in cars collecting all your private data.\nGTA V's most famous in-game search engine recreated.",
    },
  ],
};

export default initialState;
