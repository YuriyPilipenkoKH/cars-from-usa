import styled, { css } from "styled-components";

export const StyledControl = css`
    border-radius: 14px;
    border-color: transparent;
    background-color: var(--sel-color);
    outline: none;
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 500;
`


export const SelectWrapper = styled.div`
    position: relative;
    display: grid;
    gap: 8px;
    &>p {
        color: var(--text-color);
        transition: all 1s ease-in-out;

    }

`
export const Control = styled.div.attrs(props => ({
    // Add any other props you want to pass here
    price: props.price,
  }))`
    ${StyledControl}
    width: ${props => (props.price ? '125px' : "224px")} ;
    height: 48px;

    text-transform: capitalize;

    &>button>svg {
        scale: 1.4;
    }
`
export const OptionsList = styled.div.attrs(props => ({
    // Add any other props you want to pass here
    price: props.price,
  }))`
    position: absolute;
    top: 85px;
    width: ${props => (props.price ? '125px' : "224px")} ;
    height: ${props => (props.price ? '168px' : "272px")} ;
    border-radius: 14px;
    padding: 14px;
    background-color: var(--white);
    color: var(--semi-black);

    display: grid;
    gap: 15px;
    overflow-y: auto;
    z-index: 5;

    &::-webkit-scrollbar {
    width: 12px;
    
}
   &::-webkit-scrollbar-track {
    border-radius: 10px;
    
}

   &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    width: 8px;
    background-color: var(--black-20);
    position: absolute;
    right: 8px;
}

    &> li{
        text-transform: capitalize;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover, &:focus {
            color: var(--black);
            font-weight: 600;
        }
    }

`