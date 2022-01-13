import React from 'react';
import PropTypes from 'prop-types';
import '@styles/Project.less';

const Project = ({ title, description }) => (
  <article className='projects__container--item'>
    <h4 className='projects__container--title'>{title}</h4>
    <p className='projects__container--description'>{description}</p>
  </article>
);

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Project;
