import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-rows: 80px auto 120px;
  
    background-color: var(--background-color);
    background-color: #777;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    transition: all 1s ease-in-out;
    @media screen and (min-width: 320px) {
        width: 320px;
    }

    @media screen and (min-width: 768px) {
        width: 768px;
    }

    @media screen and (min-width: 1280px) {
        min-width: 100%;
        padding: 0 1em;
    }
`;