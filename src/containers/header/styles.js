import styled from 'styled-components/macro';

export const TopHeader = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    position: relative;
    z-index: 1;

    @media (min-width: 1024px) {
        padding: 30px 60px;
    }
`;

export const ContextWrapper = styled.article `
    max-width: 50%;
    margin: 0 auto;
    position: relative;
`;

