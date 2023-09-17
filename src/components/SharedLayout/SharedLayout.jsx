import { Suspense } from "react";
import { Outlet} from 'react-router-dom';
import { MainFooter, MainHeader} from "./SharedLayout.styled";
import { AppBar } from "../AppBar/AppBar";



export const SharedLayout = () => {
    return (
      <>
        <MainHeader  className="main-header" >about us
        <AppBar/>
        </MainHeader>

          <Suspense >
            <Outlet />
          </Suspense>
        
        <MainFooter className="main-footer"> 2023  </MainFooter>
      </>
    )}

    