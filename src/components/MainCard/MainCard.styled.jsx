import isPropValid from "@emotion/is-prop-valid";
import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex ;
    flex-direction: column;
    gap: 8px;
    transition: all 1s ease-in-out;
    width: 274px;
    height: 426px;
    border-radius: 14px;

    &>button.learnBtn{
      margin-top: auto;
    }

    &>.card-rows>p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--text2);
    transition: all 1s ease-in-out;
    }

`

export const ImgWrapper = styled.div.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'img' &&
        prop !== 'like'
  })`
    width: 274px;
    height: 268px;
    border-radius: 14px;
    background-color: #7775;
    padding: 14px;
    display: flex;
    align-items: start;
    justify-content: flex-end;
    background-image: ${({ img }) => img && `url("${img}")`};
 
    background-size: cover;
    background-position: center;  

    &>button.likeBtn {
        transition: all 0.4s ease-in-out;
        &:hover{
            &>svg{
            stroke:#22f;
            }
        }
        &>svg {
        fill: ${({ like }) => like ?  "#22f" : "transparent"};    
        stroke: ${({ like }) => like ?  "#22f" :  "#ffffff"};    
       }
    }

`
export const CardTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0 4px;
    font-weight: 600;
    color: var(--text-color);
    transition: all 1s ease-in-out;
`
export const RowWrapper = styled.div`
    display: flex;
    color: var(--semi-black);
    font-size: 12px;
   
    transition: all 1s ease-in-out;

    &>p{
        padding: 2px 3px 0;
   
    }

    &>p:not(:last-child){
        border-right: 2px solid var(--semi-black);
       
    }
`