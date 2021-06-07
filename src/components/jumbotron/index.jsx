import React from 'react';
import { StyledInner, Container } from '../styles';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <StyledInner direction={direction} {...restProps}>
      {children}
    </StyledInner>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return (
    <main>
      <Container {...restProps}>{children}</Container>
    </main>
  );
};
