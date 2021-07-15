import React from 'react';
import PropTypes from 'prop-types';

export class Statistics extends React.Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    console.log(this.props);
    const arrKeys = Object.keys(this.props);
    return (
      <ul>
        {arrKeys.map(key => {
          console.log.apply(this.props[key]);
          return (
            <li key={key}>
              <p>
                {key}:{' '}
                <span>
                  {this.props[key]}
                  {key === 'positivePercentage' && '%'}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}
