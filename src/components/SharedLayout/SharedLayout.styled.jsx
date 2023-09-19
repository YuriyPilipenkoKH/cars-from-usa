import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const MainHeader= styled.header.attrs(props => ({
  theme: props.theme,
}))`
  top: 0;
  left: 0;
  width: 320px;
  height: 90px;
  display: flex;
  gap: 25px;
  align-items: center;
  padding: 32px 16px 16px;
  background-color: transparent;
  border-bottom: 1px solid #222;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 32px 16px 16px;
    }
  @media screen and (min-width: 1280px) {
    padding: 32px 0 16px;
    width: 1186px;
    }

&>button.mobile-menu{

  @media screen and (min-width: 768px) {
    display: none;
    }

     &> svg {
        transition:  all 1s ease-in-out;
        color: var(--text-color);
        scale: 2;
        }

    &:hover{
        background-color: #eee5;


        &> svg {
            transition:  all 1s ease-in-out;
            fill:  ${props => props.theme === 'light' ? '#eee' : '#222'};
        }
    }
    }


`

export const StyledLink = styled(NavLink)`
  height: 34px;
  width: 115px;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border:2px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-color) ;
  transition: all 1s ease-in-out;
  font-weight: 600;
  transition: 0.3s ease;

  &.active {
    color: var(--white);
    background-color: var(--blue);
  
  }
`;

export const MainFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 320px;
  height: 90px;
  padding: 22px 16px;

  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color:  var(--text-color);
  border-top: 1px solid #222;
  background-color: transparent;
  transition: color 1s ease-in-out, fill 1s ease-in-out;

  &> svg {
    /* transition: 0.3s ease; */
    transition: color 1s ease-in-out, fill 1s ease-in-out;
    fill: var(--text-color);
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    }
  @media screen and (min-width: 1280px) {
   
    width: 1186px;
    }

    &>img{
      width: 40px;
    }
`