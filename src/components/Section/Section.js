import PropTypes from 'prop-types';

import s from './Section.module.css';

const Section = props => {
  const { title, children } = props;
  return (
    <div className={s.container}>
      <span className={s.title}>{title}</span>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
