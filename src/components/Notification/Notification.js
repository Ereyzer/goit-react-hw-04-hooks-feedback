import React from 'react';

export class Notification extends React.Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}
