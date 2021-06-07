import styled from 'styled-components/macro';

export const StyledFooterCardWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    width: 90%;
    color: #757575;

    .footer-top {
        margin: 0 0 30px;
        font-size: 1em;

    }
    .lang-selection-container {
        margin-top: 20px;
        select {
            text-indent: 0;
            background-color: #000;
            background-image: none;
            border: 1px solid #333;
            color: #999;
            font-size: 16px;
            padding: 12px;
            padding-right: 26px;
            min-width: 132px;
            min-height: 53px;
        }
    }

    .footer-country {
        font-size: 13px;
        margin-top: 24px;
    }

    a {
        &:hover {
            text-decoration: underline;
        }
    }

    @media (min-width: 768px) {
        /* margin-top: 80px; */
    }
`;

export const StyledFooterListWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledFooterLinks = styled.li`
    width: 50%;
    margin-bottom: 1rem;
    a {
        font-size: 13px;
        padding-right: 1rem;
        &:hover {
            text-decoration: underline;
        }
    }

    @media (min-width: 768px) {
        width: 25%;
    }
`;