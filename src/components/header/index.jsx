import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { StyledHeader, ButtonLink, Background, Logo } from './styles';

export default function Header({ bg = true, children, ...restProps }) {
  return (
    <StyledHeader {...restProps}>
      {bg ? <Background className='bg-wrapper'>{children}</Background> : children}
    </StyledHeader>
  );
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return <ReactRouterLink to ={to} ><Logo {...restProps} >{children}</Logo></ReactRouterLink>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
