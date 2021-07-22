import React from 'react';
import PropTypes from 'prop-types';

export function Statistic({ item, text }) {
  return (
    <li>
      <p>
        {text}:{' '}
        <span>
          {item}
          {text === 'positivePercentage' && '%'}
        </span>
      </p>
    </li>
  );
}

Statistic.defaultProps = {
  item: 0,
};
Statistic.propTypes = {
  text: PropTypes.string.isRequired,
  item: PropTypes.number,
};
