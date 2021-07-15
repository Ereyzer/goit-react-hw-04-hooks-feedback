import React from 'react';
import Container from '../Container';
import PropTypes from 'prop-types';

export class Section extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <Container>
          <h2>{title}</h2>
          {children}
        </Container>
      </section>
    );
  }
}
