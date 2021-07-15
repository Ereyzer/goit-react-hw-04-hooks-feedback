import React, { Component } from 'react';
import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  options = this.props.options;
  leaveFeedback = this.props.leaveFeedback;

  render() {
    return (
      <>
        {this.options.map(option => {
          return (
            <button
              className={style.Button}
              key={option}
              type="button"
              onClick={() => this.leaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
