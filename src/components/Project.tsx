import React from 'react';
import '../styles/components/Project.less';

const Project = ({ title, description }: Project): JSX.Element => {
  return (
    <article className='projects__container--item'>
      <h4 className='projects__container--title'>{title}</h4>
      <p className='projects__container--description'>{description}</p>
    </article>
  );
};

export default Project;
