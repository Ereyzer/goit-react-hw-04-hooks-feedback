import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from '../Statistic/Statistic';

export class Statistics extends React.Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const arrKeys = Object.keys(this.props);
    return (
      <ul>
        {arrKeys.map(key => {
          console.log.apply(this.props[key]);
          return <Statistic key={key} text={key} item={this.props[key]} />;
        })}
      </ul>
    );
  }
}
