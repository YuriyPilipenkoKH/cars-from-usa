import {  StyledHeader, ThemeBtn } from "./AppBar.styled";
import {MdOutlineNightlight} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {  getTheme } from "../../redux/selectors";
import { toggleTheme } from "../../redux/themeSlice";



export const AppBar = () => {

    const theme = useSelector(getTheme)
    const dispatch = useDispatch()
    const themeInvertor =(theme) => {
     return  theme === 'light' ?  'dark'  :  'light'
    }

    const themeMaker =() => {
      localStorage.setItem('theme', themeInvertor(theme))
      dispatch(toggleTheme())
    }

     return (
      <StyledHeader >
       <ThemeBtn 
        className="ThemeBtn"
        onClick={themeMaker}
        theme={theme}
        type="button"
        >
          {(localStorage.getItem('theme') || theme) === 'light'
          ? <MdOutlineLightMode size={30}/>
          : <MdOutlineNightlight size={30}/>
          }
        </ThemeBtn>
        
       </StyledHeader>
    );
  };