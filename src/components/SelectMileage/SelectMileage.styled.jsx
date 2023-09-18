import styled from "styled-components";
import { StyledControl } from "../SelectBrand/SelectBrand.styled";


export const MileageControl = styled.div`

${StyledControl}
width: 280px;
height: 48px;
justify-content: flex-start;
gap: 16px;
@media screen and (min-width: 768px) {
    width: 300px;
    gap:16px;
    }

@media screen and (min-width: 1280px) {
    width: 320px;
    gap:16px;
    }

&>label {
    display: flex;
    gap: 12px;

   &>input {
    width: 70px;
    border-color:transparent ;
    background-color: transparent;
    outline: none;
    font-size: 16px;
    @media screen and (min-width: 768px) {
        width: 80px;
    }
    @media screen and (min-width: 1280px) {
        width: 90px;
    }
}
}

&>label:not(:last-child){
        border-right: 2px solid var(--semi-black);
    }

`