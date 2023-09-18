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
    /* place-items: center; */
    grid-template-rows: 248px  126px 68px 100px auto;
    grid-template-areas: 
    'c1'
    'c2'
    'c3'
    'c4'
    'c5';
    gap: 12px;  
    background-color: var(--white);
    padding: 40px;
    border-radius: 24px;
    z-index: 50;
    background-color: var(--background-color-form);
    color: var(--text-color);

    @media screen and (min-width: 768px) {
    width: 541px;
    height: 752px;
    }

    &>button.modal-close{
        position: absolute;
        top: 16px;
        right: 16px;

        &>svg {
            scale: 1.5;
            color: var(--text-color);
        }
    }
    &>button.rental-car{
        grid-area: c5;
        align-self: flex-end;
        width: 168px;
    }
  `;

export const ModalImage = styled.img`
grid-area: c1;
/* max-width: 100%;
height: auto; */
width:240px;
height: 240px;
border-radius: 14px;

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
        white-space: nowrap;
        /* -webkit-box-orient: vertical ; */
        /* -webkit-line-clamp: 2 ;  */
    }
`
export const CarAccessories = styled.div`
    grid-area: c3;
    display: grid;
    gap: 8px;
    &>h3{
        font-size: 14px;
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
        &>div{
            display: inline-flex;
            gap: 4px;
            padding:6px 8px;
            background-color: #7775;
            border-radius: 16px;
        }
    &>div>span {
        color: #3470FF;
        font-weight: 600;
    }

}
`