import styled from "styled-components";


export const ModalOverlay = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s, visibility 0s 1s; 
  
&.modal.active {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s;
}
`;

export const ModalContainer = styled.div`
  
    width: 280px;
    height: 752px;

    position: relative;
    display: grid;
    grid-template-rows: 248px  126px 68px 100px auto;
    grid-template-areas: 
    'c1'
    'c2'
    'c3'
    'c4'
    'c5';
    gap: 12px;  
    background-color: var(--white);
    padding: 20px;
    border-radius: 14px;
    z-index: 50;
    background-color: #fff;
    color: var(--black);

    @media screen and (min-width: 768px) {
    width: 541px;
    height: 752px;
    padding: 40px;
    border-radius: 24px;
    }

    &>button.modal-close{
        position: absolute;
        top: 8px;
        right: 8px;

        &>svg {
        color: var(--main-text);
        }
    @media screen and (min-width: 768px) {
            top: 16px;
            right: 16px;
            &>svg {
            scale: 1.5;
         
        }
    }

    }
    `;

export const RentalCarWrapp = styled.div`
    grid-area: c5;
    align-self: flex-end;
    &>a>.rental-car{
        width: 168px;
    }
  `

export const ModalImage = styled.div.attrs(props => ({
    img: props.img,
    like: props.like,
  }))`
grid-area: c1;
width:240px;
height: 240px;
border-radius: 14px;
    background-image: url(${props => props.img &&  props.img});
    background-size: cover;
    background-position: center;  

@media screen and (min-width: 768px) {
  width: 461px;
  height: 248px;

}

`;

export const CarDescription = styled.div`
    grid-area: c2;
    display: grid;
    gap: 8px;
    font-size: 18px;
    font-weight: 500;
    
    &>.car-model{
        display: flex;
        gap: 8px;
        &>span{
           color :#3470FF;
        }
    }

    &>p.details{
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis; 
        -webkit-box-orient: vertical ; 
        -webkit-line-clamp: 2 ; 
    }

    &>.tech-params {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
    }
`
export const CarAccessories = styled.div`
    grid-area: c3;
    display: grid;
    gap: 8px;
    &>h3{
        font-size: 14px;
    }
    &> .accessories{
        width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        @media screen and (min-width: 768px) {
        width: 461px;
       }   
    }
`
export const RentalConditions  = styled.div`
    grid-area: c4;
    display: grid;

    gap: 8px;
    &>h3{
        font-size: 14px;
    }

    &>.tabs{
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-family: Montserrat,  sans-serif ;
        &>div{
            display: inline-flex;
            gap: 4px;
            padding:6px 8px;
            background-color: #f9f9f9;
            border-radius: 16px;
        }
    &>div>span {
        color: #3470FF;
        font-weight: 600;
    }

}
`