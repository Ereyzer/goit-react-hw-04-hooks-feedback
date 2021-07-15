import React from 'react';
import PropTypes from 'prop-types';

export class Notification extends React.Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}

Notification.defaultProps = {
  message: 'have not any message',
};

Notification.propTypes = {
  message: PropTypes.string,
};
