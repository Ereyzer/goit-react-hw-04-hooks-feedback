import React from 'react';
import Container from '../Container';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <section>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
