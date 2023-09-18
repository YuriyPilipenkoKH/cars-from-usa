import { useState } from "react";
import { iconHeart } from "../../images/icons"
import { Button, FlatButton } from "../Button/Button"
import { CardTitle, CardWrapper, ImgWrapper, RowWrapper } from "./MainCard.styled"
import ModalPopup from "../ModalPopup/ModalPopup";


export const MainCard = () => {
    const [showModal, setShowModal] = useState(false);

    const onModalClose = () => {
        setShowModal(false);
    };

    const onModalOpen = () => {
        setShowModal(true);
    };

    return (
        <CardWrapper>
            <ImgWrapper>
            <FlatButton className="likeBtn">
                {iconHeart}
            </FlatButton>
            </ImgWrapper>
            <CardTitle>
                <p>Subaru, 2016</p>
                <p>$45</p>
            </CardTitle>

           <RowWrapper>
               <p>Kyiv</p>
               <p>Ukraine</p>
               <p>Adventure Car Rentals</p>
               <p>Premium</p>
           </RowWrapper>

           <RowWrapper>
               <p>Suv</p>
               <p>Subaru</p>
               <p>9590</p>
               <p>Power moonroof</p>
           </RowWrapper>

           <Button 
            onClick={onModalOpen }
            className="learnBtn">
            Learn more</Button>

            {showModal && (
                <ModalPopup
                    onClose={onModalClose}
                    isOpen={showModal}
                />
            )}

        </CardWrapper>
    )
}