import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import Loader from '../components/Loader/Loader';
import { Container } from '../components/Container/Container';
import Home from '../pages/Home';
import { useSelector } from 'react-redux';
import { getLang, getTheme } from '../redux/selectors';
import Catalogue from '../pages/Catalogue';
import { NotFound } from '../pages/NotFound';



const App = () => {
    const isLoading = false
//   const {  isLoading } = useAuth();
  const theme = useSelector(getTheme)
  const language = useSelector(getLang)

  //  Set the data-theme attribute on the <html> element
   document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || theme);
   document.documentElement.setAttribute('data-lang',  localStorage.getItem('language')  || language);



  return isLoading ? (
   <Loader/>
  ) : (                     
       
      <Container >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route  index element={< Home />} />
          <Route  path="/catalogue" element={< Catalogue />} />
      
          <Route path="*" element={<NotFound/>} />
       </Route>
      </Routes>
      </Container>
  
  );
};

export default App;

