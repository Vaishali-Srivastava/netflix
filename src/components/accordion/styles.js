import styled from 'styled-components/macro';

export const StyledAccordion = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 8px solid #222;
    padding: 50px 20px;
    flex-direction: column;

    @media only screen and (min-width: 550px) and (max-width: 949px), 
    only screen and (min-width: 950px) and (max-width: 1449px), 
    only screen and (min-width: 1450px) {
        padding: 70px 45px;
    }
`;

export const Title = styled.h2`
text-align: center;
    line-height: 1.1;
    margin-bottom: .5rem;
    font-weight: bold;
    font-size: 1.625rem;
    @media only screen and (min-width: 768px) {
        font-size: 3.125rem;
        text-align: left;
    }
`;

export const Frame = styled.section`
    margin: 1.25rem auto;
    max-width: 815px;
    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        width: 75%;
        margin: 2em auto;
    }
`;

export const Item = styled.article`
    margin: 0 0 8px 0;
    font-size: 1.25rem;
    line-height: 2rem;
`;

export const Header = styled.header`
    padding: 1rem;
    margin-bottom: 1px;
    font-weight: 400;
    background: #303030;
    border: 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.125rem;
    .title {
        padding-right: 1rem;
    }
    @media only screen and (min-width: 768px) {
        padding: 1.25rem 2rem;
        font-size: 1.625rem;
    }
`;

export const Body = styled.body`
    padding: 1rem;
    transition: max-height .25s cubic-bezier(.5,0,.1,1);
    background: #303030;
    max-height: 1200px;
    overflow-y: auto;
    line-height: 2rem;
    @media only screen and (min-width: 768px) {
        padding: 1.25rem 2rem;
    }
`;
