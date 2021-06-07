import styled from 'styled-components';


export const StyledCardContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1100px;
        margin: 0 auto;
        flex-direction: column;
        .info-panel {
            width: 100%;
            text-align: center;
            height: 100%;
            flex: 0 1 auto;
            .card-title {
                margin-bottom: .5rem;
                font-weight: bold;
                font-size: 1.625rem;
                line-height: 1.1;
            }
            .card-sub-title {
                font-weight: 400;
                margin: .75em 0 .25em;
                font-size: 1.125rem;
                line-height: 1.5rem;
            }
        }
        .image-panel {
            width: 100%;
            height: 100%;
            display: flex;
            max-height: 400px;
            flex: 0 1 auto;
            img {
                margin: 0 auto;
                max-width: 100%;
                max-height: 100%;
            }
        }

        @media(min-width: 768px) {
            flex-direction: inherit;
            .info-panel {
                width: 52%;
                flex: 0 1 auto;
                text-align: left;
                padding: 0 3rem 0 0;
                .card-title {
                    font-size: 3.125rem;
                }
                .card-sub-title {
                    font-size: 1.625rem;
                    font-weight: 400;
                    line-height: 2.25rem;
                    margin: .75em 0 .25em;
                }
            }
            .image-panel {
                
                width: 48%;
            }
        }
`;

