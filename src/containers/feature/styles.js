import styled from 'styled-components/macro';

export const StyledInputPanel = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;