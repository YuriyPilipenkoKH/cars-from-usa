
import React, { useEffect, useState } from 'react'
import { MainCard } from '../components/MainCard/MainCard'
import FiltersBar from '../components/FiltersBar/FiltersBar'
import { useDispatch, useSelector } from 'react-redux';
import { getCarList, getFavorites, getFilter, getReRender } from '../redux/selectors';
import { getAllCars } from '../redux/carsOperations';
import { CatalogueWrapper, Gallery } from './Page.styled';
import { Button} from '../components/Button/Button';

import { resetFilters } from '../redux/filterSlice';
import { iconLoader } from '../images/icons';


const Catalogue = () => {
  const carsList = useSelector(getCarList);
  const [visibleCars, setVisibleCars] = useState(8);
  const [searchedCars, setSearchedCars] = useState(carsList)
  const [isSeaching, setIsSeaching] = useState(false)

  const dispatch = useDispatch();
    const reRender= useSelector(getReRender)
    const favorites= useSelector(getFavorites)
    const loadMoreStep = 8; 
    const {
      filterBrand, 
      filterPrice,
      filterFrom,
      filterTo
    } = useSelector(getFilter)

    const handleLoadMore = () => {
      setVisibleCars((prevVisibleCars) => prevVisibleCars + loadMoreStep);
    };
  
    const filterdCars = () =>  {

    return  [...carsList
        .filter(item => ( filterBrand === "" ? true : item.make.toLowerCase() === filterBrand.toLowerCase() ))
        .filter(item => ( filterPrice === 0  ? true : Number(item.rentalPrice.replace(/\$/g, "")) <= filterPrice ))
        .filter(item => (filterFrom === "" || filterTo === "" ? true : item.mileage >= filterFrom*1000  && item.mileage <= filterTo*1000 ))
      ]
    }

    const reset =() => {
      dispatch(resetFilters())
      setIsSeaching(false)
     }

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllCars()); // Wait for dispatch to finish
      setSearchedCars(filterdCars);
    };

    fetchData();
  }, [dispatch, reRender, favorites]);

  const carSearch = () => {
    setSearchedCars(filterdCars)
    setIsSeaching(true)

   }

  return (
    <CatalogueWrapper className='wrapper'>

    <FiltersBar 
    reset={reset}
    search={carSearch} />
    <Gallery className='gallery'>
        {isSeaching 
        ? (searchedCars
        .slice(0, visibleCars)
        .map((item, index) =>
         <MainCard key={index} item={item} />
        ))
        : (carsList
          .slice(0, visibleCars)
          .map((item, index) =>
           <MainCard key={index} item={item} />
          ))
      }
      </Gallery>
      { searchedCars.length !== 0 && ( visibleCars < searchedCars.length || visibleCars < carsList.length  )  && (
        <Button 
        className='LoadMore'
        onClick={handleLoadMore}>Load More {iconLoader} </Button>
      )}


     </CatalogueWrapper>
  )
}

export default Catalogue