import styled from 'styled-components/macro';

export const StyledInner = styled.section`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: center;
    justify-content: space-between;
    position: relative;
    border-bottom: 8px solid #222;
    padding: 50px 20px;

    @media only screen and (min-width: 550px) and (max-width: 949px), 
    only screen and (min-width: 950px) and (max-width: 1449px), 
    only screen and (min-width: 1450px) {
        padding: 70px 45px;
    }
`;

export const Container = styled.div`
    background: #000;
    color: #fff;
    max-width: 100%;
    overflow-x: hidden;
`;