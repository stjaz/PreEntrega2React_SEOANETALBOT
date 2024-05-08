

import CategoryList from "../CategoryList/CategoryList";
import CartWidget from "../CartWidget/CartWidget";
import Brand from "../Brand/Brand";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
    <div className="navbar-contenedor">
        <CategoryList />
        <CartWidget />
        <Link to="/">
        <Brand />
        </Link>
    </div>
    );
}

export default NavBar;
