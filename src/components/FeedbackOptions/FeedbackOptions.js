import React from 'react';
import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, leaveFeedback }) {
  return (
    <>
      {options.map(option => {
        return (
          <button
            className={style.Button}
            key={option}
            type="button"
            onClick={() => leaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
