import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => <p>{message}</p>;
Notification.defaultProps = {
  message: 'have not any message',
};

Notification.propTypes = {
  message: PropTypes.string,
};
