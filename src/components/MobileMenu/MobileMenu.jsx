import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";
import { ThemeBtn } from "../AppBar/AppBar.styled";
import { FlatButton } from "../Button/Button"
import { MenuContent, MenuHeader, MenuWrapp } from "./MobileMenu.styled"
import { RxCross2 } from 'react-icons/rx';
import { getTheme } from "../../redux/selectors";
import {MdOutlineNightlight} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';
import { StyledLink } from "../SharedLayout/SharedLayout.styled";


const MobileMenu = ({ isOpen, onClose }) => {
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
    <MenuWrapp className={isOpen ? ['menu', 'active'].join(' ') : 'menu'}>
        <MenuHeader theme={theme}>
        <ThemeBtn 
        onClick={themeMaker}
        type="button"
      
        >
          {(localStorage.getItem('theme') || theme) === 'light'
          ? <MdOutlineLightMode size={30}/>
          : <MdOutlineNightlight size={30}/>
          }
        </ThemeBtn>

        <FlatButton
        theme
        className ='closeBtn'
         onClick={onClose}>
                    <RxCross2 />
        </FlatButton>
        </MenuHeader>
        <MenuContent>
        <StyledLink
          to="/"
          onClick={onClose}>
        Home
        </StyledLink>
        <StyledLink 
         to="/catalogue"
         onClick={onClose}>
        Catalogue
        </StyledLink>
        <StyledLink  
        to="/favorites"
        onClick={onClose}>
        Favorites
        </StyledLink>
        </MenuContent>
    </MenuWrapp>
  )
}

export default MobileMenu