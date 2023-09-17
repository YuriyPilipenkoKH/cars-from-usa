import { iconHeart } from "../../images/icons"
import { Button } from "../Button/Button"
import { CardTitle, CardWrapper, ImgWrapper, RowWrapper } from "./MainCard.styled"


export const MainCard = () => {

    return (
        <CardWrapper>
            <ImgWrapper>
            <button className="likeBtn">
                {iconHeart}
            </button>
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

           <Button className="learnBtn">Learn more</Button>
        </CardWrapper>
    )
}