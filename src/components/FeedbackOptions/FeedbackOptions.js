import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.listButtons}>
      {options.map(option => {
        return (
          <li className={s.listItem} key={uuidv4()}>
            <button
              className={s.button}
              onClick={() => onLeaveFeedback(option)}
            >
              {option[0].toUpperCase() + option.slice(1)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
