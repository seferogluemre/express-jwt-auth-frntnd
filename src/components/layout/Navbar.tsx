import { NavLink } from "react-router-dom";

function NavbarComp() {


    return <>
        <nav>
            <ul>
                <li><NavLink to={"/"}>Ana sayfa</NavLink></li>
                <li><NavLink to={"/about"}>Hakkımızda</NavLink></li>
            </ul>
        </nav>
    </>
}

export default NavbarComp;