import styled from 'styled-components/macro';
import { Container } from '../../components/styles';

export const StyledOptForm = styled.div`
    padding-top: 1rem;
    text-align: center;
    ${Container} {
        background: none;
    }
`;

export const Input = styled.input`
    background: #fff;
    font-size: 16px;
    border: solid 1px #8c8c8c;
    border-radius: 0;
    height: 48px;
    width: 100%;
    margin-bottom: 1rem;
    padding-left: 20px;
    border: 0;
    &:focus {
        outline: none;
    }
    @media (min-width: 768px) {
        /* min-width: 450px; */
        margin-bottom: 0rem;
        height: 58px !important;
    }
`;

export const Text = styled.h4`
    padding-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
`;

export const Button = styled.button`
    box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
    color: #fff;
    padding: 0 1em;
    outline: none;
    background-color: #e50914;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    min-height: 40px;
    min-width: 150px;

    &:hover, &:focus {
        background: #f40612;
        box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
    }

    @media (min-width: 768px) {
        font-size: 1.625rem;
        min-height: 60px;
        min-width: 210px;
    }
`;