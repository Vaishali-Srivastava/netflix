import styled from 'styled-components/macro';
import { Link as RactRouterLink } from 'react-router-dom';

export const StyledHeader = styled.article`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 auto;
   transition: background-color .5s;
   background: transparent;

`;

export const Background = styled.div`
    width: 100%;
    background: url(${({ src }) => (src ? `../../../../images/misc/${src}.jpg` : `../../../../images/misc/home-bg.jpg`)});
    background-repeat: no-repeat;
    background-position: top left;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -100px;
    position: relative;
    border-bottom: 8px solid #222;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    }
    @media (min-width: 768px) {

    }
`;

export const Logo = styled.div`
    font-size: 18px;
    line-height: 24px;
    svg {
        height: 36px;
        width: 134px;
        fill: #e50914;
    }
`;

export const ButtonLink = styled(RactRouterLink)`
    background-color: #e50914;
    line-height: normal;
    padding: 7px 17px;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
    border-radius: 3px;

    &:hover, &:focus {
        background: #f40612;
    }

`;