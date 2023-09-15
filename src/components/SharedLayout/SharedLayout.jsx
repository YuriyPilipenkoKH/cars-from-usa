
import { Suspense } from "react";
import { Outlet} from 'react-router-dom';
import { MainFooter, MainHeader} from "./SharedLayout.styled";



export const SharedLayout = () => {

    return (
        <>
        <MainHeader  className="main-header" >
        {/* <AppBar/> */}
        </MainHeader>
        <Suspense >
                  <Outlet />
        </Suspense>
        
        <MainFooter >2023  </MainFooter>
          </>
    )}