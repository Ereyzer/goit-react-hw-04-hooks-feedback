import React from 'react';
import Container from '../Container';
export class Section extends React.Component {
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
