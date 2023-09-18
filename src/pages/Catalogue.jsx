
import React, { useEffect } from 'react'
import { MainCard } from '../components/MainCard/MainCard'
import FiltersBar from '../components/FiltersBar/FiltersBar'
import { useDispatch, useSelector } from 'react-redux';
import { getCarList } from '../redux/selectors';
import { getAllCars } from '../redux/carsOperations';
import { Gallery } from './Page.styled';

const Catalogue = () => {
  const dispatch = useDispatch();
    const carsList = useSelector(getCarList);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);
  return (
    <div className='wrapper'>

    <FiltersBar/>
    <Gallery className='gallery'>
        {carsList.map((item, index) =>
         <MainCard key={index} item={item} />
        )}
      </Gallery>
        
     </div>
  )
}

export default Catalogue