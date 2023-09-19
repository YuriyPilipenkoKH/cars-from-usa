import { useDispatch, useSelector } from "react-redux";
import { getCarList, getReRender } from "../redux/selectors";
import { useEffect, useState } from "react";
import { Gallery } from "./Page.styled";
import { MainCard } from "../components/MainCard/MainCard";
import { Button } from "../components/Button/Button";
import { getAllCars } from "../redux/carsOperations";



const Favorites = () => {

  const dispatch = useDispatch();
  const carsList = useSelector(getCarList);
  const reRender= useSelector(getReRender)
  const [visibleCars, setVisibleCars] = useState(12); // Number of cards to initially display
  const loadMoreStep = 12; 

  
  const handleLoadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + loadMoreStep);
  };

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch, reRender]);
  return (
    <div>
       <Gallery className='gallery'>
        {carsList.slice(0, visibleCars).map((item, index) =>
        
         <MainCard key={index} item={item} />
        )}
      </Gallery>
      {visibleCars < carsList.length && (
        <Button 
        className='LoadMore'
        onClick={handleLoadMore}>Load More</Button>
      )}

    </div>
  )
}

export default Favorites