import { useDispatch, useSelector } from "react-redux";
import { getCarList, getFavorites, getReRender } from "../redux/selectors";
import { useEffect, useState } from "react";
import { CatalogueWrapper, Gallery } from "./Page.styled";
import { MainCard } from "../components/MainCard/MainCard";
import { Button } from "../components/Button/Button";
import { getAllCars } from "../redux/carsOperations";



const Favorites = () => {

  const dispatch = useDispatch();
  const carsList = useSelector(getCarList);
  const reRender= useSelector(getReRender)
  const favorites = useSelector(getFavorites)
  const [visibleCars, setVisibleCars] = useState(8); 
  const loadMoreStep = 8; 

  
  const handleLoadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + loadMoreStep);
  };

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch, reRender]);

  return (
    <CatalogueWrapper>
       <Gallery className='gallery'>
        {carsList
        .filter((item) => item.favorite === true)
        .slice(0, visibleCars)
        .map((item, index) =>

         <MainCard key={index} item={item} /> 
        )}
      </Gallery>


   { (favorites > visibleCars) && (
        <Button 
        className='LoadMore'
        onClick={handleLoadMore}>Load More</Button>
      )} 

    </CatalogueWrapper>
  )
}

export default Favorites