import { HomeTitle, HomeWrapper } from "./Page.styled";
import car from '../images/grand-cherokee-trailhawk.png'

export default function Home() {


    return (
      <HomeWrapper  >
        <HomeTitle  >
         Car Rentals
        </HomeTitle>
        <p>Best Choice</p>
        <img src={car} alt="car"/>
        <p>Book your trip with us</p>

      </HomeWrapper>
    );
  }