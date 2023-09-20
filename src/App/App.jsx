import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import Loader from '../components/Loader/Loader';
import { Container } from '../components/Container/Container';
import Home from '../pages/Home';
import { useSelector } from 'react-redux';
import { getLoading, getTheme } from '../redux/selectors';
import Catalogue from '../pages/Catalogue';
import Favorites from '../pages/Favorites';



const App = () => {

//   const {  isLoading } = useAuth();
  const theme = useSelector(getTheme)
  const loading = useSelector(getLoading)
   document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || theme);


  return (         
       
      <Container >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route  index element={< Home />} />
          <Route  path="/catalogue" element={< Catalogue />} />
          <Route  path="/favorites" element={< Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
       </Route>
      </Routes>

      {loading && Loader}
      </Container>
  
)
};

export default App;

