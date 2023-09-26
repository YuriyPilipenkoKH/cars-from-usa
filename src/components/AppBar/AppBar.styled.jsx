import isPropValid from "@emotion/is-prop-valid";
import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
   gap: 20px;

   &>button.ThemeBtn{
       display: none;
       
       @media screen and (min-width: 768px) {
           display: flex;
           margin-left: auto;
    }
   }
`

export const ThemeBtn = styled.button.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'theme'
  })`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.4ms ease-in-out;
    cursor: pointer;
 
    &> svg {
        transition:  fill 1s ease-in-out;
        fill: var(--text-color);
        }

    &:hover{
        background-color: #eee5;

        &> svg {
            transition:  fill 1s ease-in-out;
            fill:  ${({ theme }) => theme === 'light' ? "var(--yellow)" : "var(--black)"};
        }
    }
`