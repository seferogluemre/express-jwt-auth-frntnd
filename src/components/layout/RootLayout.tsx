import { Outlet } from "react-router-dom";
import NavbarComp from "./Navbar";
function RootLayout() {

    return <>
        <NavbarComp />
        <Outlet />
    </>


}

export default RootLayout;