import isPropValid from "@emotion/is-prop-valid";
import styled from "styled-components";

export const CardWrapper = styled.li`
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
        prop !== 'like'
  })`
  position: relative;
    width: 274px;
    height: 268px;
    border-radius: 14px;
    background-color: #7775;
    display: flex;
    align-items: start;
    justify-content: flex-end;


    &>button.likeBtn {
        z-index: 2;
        position: absolute;
        top: 14px;
        right: 14px;
        transition: all 0.4s ease-in-out;
        &:hover{
            &>svg{
            stroke:#22f;
            }
        }
        &>svg {
        fill:  ${({ like }) => like ?  "var(--blue)" : "transparent"};
        stroke: ${({ like }) => like ?  "var(--blue)" : "#ffffff"};  
       }
    }

`

export const CardImage = styled.img`
    /* object-fit: fill; */
    object-fit: cover;

    border-radius: 14px;
    width: 274px;
    height: 268px;
`

export const CardTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0 4px;
    font-weight: 600;
    color: var(--text-color);
    transition: all 1s ease-in-out;

     &>p>span.model{
        color :#3470FF;
    }
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