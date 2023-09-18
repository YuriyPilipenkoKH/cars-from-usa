import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setModalClose, setModalOpen } from "../../redux/modalSlice";
import { CarAccessories, CarDescription, ModalContainer, ModalImage, ModalOverlay, RentalConditions } from "./ModalPopup.styled";
import { createPortal } from "react-dom";
import { RxCross2 } from 'react-icons/rx';
import { Button, FlatButton } from "../Button/Button";
import { RowWrapper } from "../MainCard/MainCard.styled";

const modalRoot = document.querySelector('#modal-root');
const ModalPopup = ({isOpen, onClose, item}) => {
  const dispatch = useDispatch();
  const {
    id,
    img,
    make, 
    year,
    model,
    type, 
    rentalPrice, 
    address,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalConditions,
    mileage} =  item

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
}, [onClose,dispatch]);

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
    {img && (
    <ModalImage img={img}  />
    )}

    <CarDescription>
      <div className="car-model">
        <p> {make} </p>
        <span> {model} </span>
        <p> {year} </p>
      </div>

          <RowWrapper className="tech-params">
               <p>{address.split(' ')[3].replace(/,/g, '')}</p>
               <p>{address.split(' ')[4].replace(/,/g, '')}</p>
               <p>Id: <span>{id}</span></p>
               <p>Year: <span>{year}</span></p>
               <p>Year: <span>{year}</span></p>
               <p>Type: <span>{type}</span></p>
           </RowWrapper>

           <RowWrapper className="tech-params">
              <p>Fuel Consumption: <span>{fuelConsumption}</span></p>
              <p>Engine Size: <span>{engineSize}</span></p>

           </RowWrapper>  
           <p className="details">{description}</p>
    </CarDescription>
    <CarAccessories>
      <h3>Accessories and functionalities:</h3>
      <RowWrapper className="accessories">
               <p>{accessories[0]}</p>
               <p>{accessories[1]}</p>
               <p>{accessories[2]}</p>

           </RowWrapper>
      <RowWrapper className="accessories">
               <p>{functionalities[0]}</p>
               <p>{functionalities[1]}</p>
               <p>{functionalities[2]}</p>

           </RowWrapper>
    </CarAccessories>
    <RentalConditions>
      <h3>Rental Conditions: </h3>
      <div className="tabs">
      <div>Minimum age:<span>{rentalConditions.split("\\n")[0].match(/\d+/)}</span></div>
        <div>{rentalConditions.split("\n")[0]}</div>
        <div>{rentalConditions.split("\n")[1]}</div>
        <div>Mileage: <span>{mileage/1000}</span></div>
        <div>Price: <span>{rentalPrice}</span></div>
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