import React from 'react';

export class Statistics extends React.Component {
  render() {
    console.log(Object.keys(this.props));
    const arrKeys = Object.keys(this.props);

    return (
      <ul>
        {arrKeys.map(key => (
          <li key={key}>
            <p>
              {key}:{' '}
              <span>
                {this.props[key]}
                {key === 'positivePercentage' && '%'}
              </span>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
