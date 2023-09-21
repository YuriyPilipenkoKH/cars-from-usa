export const getTheme =  state => state.theme.theme

export const getFilter = state => state.filter

export const getCars = state => state.cars;

export const getCarList = state => state.cars.carsList;

export const getFavorites = state => state.cars.favorites; 

export const getReRender = state => state.cars.reRender; 

export const getLoading = state => state.cars.loading; 



      //   : (carsList
      //     .slice(0, visibleCars)
      //     .map((item, index) =>
      //      <MainCard key={index} item={item} />
      //     ))
      // }