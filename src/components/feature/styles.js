import styled from 'styled-components/macro';

export const Title = styled.h1`
    font-size: 1.75rem;
    line-height: 1.1;
    max-width: 640px;
    margin: 0 auto;
    font-weight: bold;
    color: #fff;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 3.125rem;
    }
`;

export const SubTitle = styled.h2`
    max-width: 640px;
    font-size: 1.125rem;
    margin: 1rem auto;
    font-weight: 400;
    color: #fff;
    text-align: center;
    @media (min-width: 768px) {
        font-size: 1.625rem;
    }
`;

export const StyledFeature = styled.div``;