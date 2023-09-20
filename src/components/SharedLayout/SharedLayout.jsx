import { Suspense, useState } from "react";
import { Outlet} from 'react-router-dom';
import { MainFooter, MainHeader} from "./SharedLayout.styled";
import { AppBar } from "../AppBar/AppBar";
import { Navigation } from "../Navigation/Navigation";
import { RxHamburgerMenu } from 'react-icons/rx';
import { FlatButton } from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
import { mirrorStream } from "../../images/icons";



export const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
};
    return (
      <>
        <MainHeader  className="main-header" >

        <Navigation/>
        <AppBar/>
        <FlatButton 
         className='mobile-menu'
         onClick={toggleMenu}>
         <RxHamburgerMenu />
        </FlatButton>
        </MainHeader>

          <Suspense >
            <Outlet />
          </Suspense>
        
        <MainFooter className="main-footer">
        2023
        {mirrorStream}
          </MainFooter>
        <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
      </>
    )}

