
import React, { useEffect, useState } from 'react'
import { MainCard } from '../components/MainCard/MainCard'
import FiltersBar from '../components/FiltersBar/FiltersBar'
import { useDispatch, useSelector } from 'react-redux';
import { getCarList, getReRender } from '../redux/selectors';
import { getAllCars } from '../redux/carsOperations';
import { CatalogueWrapper, Gallery } from './Page.styled';
import { Button } from '../components/Button/Button';

const Catalogue = () => {
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
    <CatalogueWrapper className='wrapper'>

    <FiltersBar/>
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
     </CatalogueWrapper>
  )
}

export default Catalogue