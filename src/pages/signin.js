import { React } from "react";
import FooterWrapper from '../containers/footer';
import HeaderWrapper from '../containers/header';
import SignInWrapper from '../containers/sign-in';
import { StyledSignInWrapper } from './styles';

export default function SignIn() {
    return (
        <StyledSignInWrapper>
            <HeaderWrapper />
            <SignInWrapper />
            <FooterWrapper />
        </StyledSignInWrapper>
    )
}