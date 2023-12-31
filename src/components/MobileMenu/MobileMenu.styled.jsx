import isPropValid from '@emotion/is-prop-valid';
import styled from 'styled-components';

export const MenuWrapp = styled.div`

  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: -100%;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  background-color: var(--background-color);
  /* transition: left 1s;   */  
  transition:  all 1s ease-in-out;   // for theme
  padding: 25px;

  &.active {
    left: 0;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }

`
  export const MenuHeader = styled.div.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'theme'
  })`
    position: relative;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-self: center ;

    @media screen and (min-width: 768px) {
        width: 768px;
    }

    &>button.closeBtn {
        &> svg {
        transition:  all 1s ease-in-out;
        color: var(--text-color);
        scale: 2;
        }

    &:hover{
        background-color: #eee5;
        &> svg {
            transition: all 1s ease-in-out;
            fill:  ${({ theme }) => theme === 'light' ? "var(--yellow)" : "var(--black)"};
        }
    }
    }

`
export const MenuContent = styled.div`
    display: grid;
    place-items: center;
    padding: 40px;
    gap: 40px;

    `