import styled from "styled-components";

export const FilfersWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 8px;
    }

    @media screen and (min-width: 1280px) {
        gap: 18px;
    }

    &>button.searchBtn{
        width:138px;
    @media screen and (min-width: 768px) {
        width: 80px;
        align-self: flex-end;
    }    
    @media screen and (min-width: 1280px) {
       width: 138px;
    }

    }
`

export const StyledSelect = styled.select`
    width: 224px;
    height: 48px;
    border-radius: 14px;
    border-color: transparent;
    background-color: var(--sel-color);
    outline: none;
  

    & option {
        background-color: #ff0;
        padding: 4px;
        border-radius: 14px;

        &:hover {
            background-color: #fff;
        }
    }
`
export const StyledLabel = styled.label`
    display: grid;
    gap: 8px;
    color: var(--gery);
    font-size: 14px;
`