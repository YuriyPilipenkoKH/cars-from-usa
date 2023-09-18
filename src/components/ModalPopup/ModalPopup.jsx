import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setModalClose, setModalOpen } from "../../redux/modalSlice";
import { CarAccessories, CarDescription, ModalContainer, ModalImage, ModalOverlay, RentalConditions } from "./ModalPopup.styled";
import { createPortal } from "react-dom";
import { RxCross2 } from 'react-icons/rx';
import { Button, FlatButton } from "../Button/Button";
import { RowWrapper } from "../MainCard/MainCard.styled";

const modalRoot = document.querySelector('#modal-root');
const ModalPopup = ({isOpen, onClose, image,}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
        dispatch(setModalOpen());
    }
    if (!isOpen) {
        dispatch(setModalClose());
    }
}, [dispatch, isOpen]);

useEffect(() => {
  const handleBackdropClick = e => {
      if (e.target.classList.contains('modal-backdrop')) {
          dispatch(setModalClose());
          onClose();
      }
  };

  const handleKeyDown = e => {
      if (e.keyCode === 27) {
          dispatch(setModalClose());
          onClose();
      }
  };

  const body = document.body;
  body.style.overflow = 'hidden';

  window.addEventListener('click', handleBackdropClick);
  window.addEventListener('keydown', handleKeyDown);

  return () => {
      body.style.overflow = 'unset';
      window.removeEventListener('click', handleBackdropClick);
      window.removeEventListener('keydown', handleKeyDown);
  };
}, [onClose]);

const shut = () => {
  dispatch(setModalClose());
  onClose();
};


  return createPortal(
    <ModalOverlay
    className={`modal ${
        isOpen
            ? ['active', 'modal-backdrop'].join(' ')
            : 'modal-backdrop'
    }`}
>


    <ModalContainer>
    {image && (
    <ModalImage src={null} alt="Modal Image" />
    )}

    <CarDescription>
      <div className="car-model">
        <p>Buick</p>
        <span>Enclave</span>
        <p>2008</p>
      </div>
      <RowWrapper>
               <p>Kyiv</p>
               <p>Ukraine</p>
               <p>Id: <span>9582</span></p>
               <p>Year: <span>2008</span></p>
               <p>Year: <span>2008</span></p>
               <p>Type: <span>Suv</span></p>
           </RowWrapper>

           <RowWrapper>
               <p>Fuel Consumption: <span>10.5</span></p>
               <p>Engine Size: 3.6L <span>V6</span></p>

           </RowWrapper>  
        <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia beatae ut nostrum, repudiandae similique officia incidunt odit magnam veniam maxime a? Nihil similique, quod corporis tempora repellat nostrum voluptatum expedita natus veniam officia dolore blanditiis hic omnis consectetur consequatur laborum nobis porro temporibus error. Consequatur iure dolorem, libero perspiciatis quam alias vel maxime error dolorum sapiente eius, cum harum culpa sunt minima nulla, eaque dolor. Quisquam quis totam expedita quas maxime eius doloremque sequi, dolorem, itaque reiciendis quod temporibus magnam illum, ad aut ipsum perferendis neque ea tempore distinctio quam nihil? Temporibus dolores incidunt molestiae exercitationem distinctio voluptas debitis fugit.</p>
    </CarDescription>
    <CarAccessories>
      <h3>Accessories and functionalities:</h3>
      <RowWrapper>
               <p>Leather seats</p>
               <p>Panoramic sunroof</p>
               <p>Power liftgate</p>

           </RowWrapper>
      <RowWrapper>
               <p>Premium audio system</p>
               <p>Remote start</p>
               <p>Blind-spot monitoring</p>

           </RowWrapper>
    </CarAccessories>
    <RentalConditions>
      <h3>Rental Conditions: </h3>
      <div className="tabs">
        <div>Minimum age : <span> 25</span></div>
        <div>Valid driver’s license</div>
        <div>Security deposite required </div>
        <div>Mileage: <span>5,858</span></div>
        <div>Price: <span>40$</span></div>
      </div>
    </RentalConditions>

    <Button className='rental-car'>Rental car</Button>


      <FlatButton
      className ='modal-close'
       onClick={shut}>
            <RxCross2 />
      </FlatButton>
    </ModalContainer>
    </ModalOverlay>,
            modalRoot
  )
}

export default ModalPopup