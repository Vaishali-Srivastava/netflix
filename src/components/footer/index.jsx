import React from 'react';
import { Container } from '../styles';
import { StyledFooter } from './styles';

export default function Footer ({children, ...restProps}) {
    return (
        <StyledFooter {...restProps}>
            {children}
        </StyledFooter>
    )
}

Footer.Container = function FooterContainer ({children, ...restProps}) {
    return (
        <footer>
            <Container {...restProps}>
                {children}
            </Container>
        </footer>
    )
}