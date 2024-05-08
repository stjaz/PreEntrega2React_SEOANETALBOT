

import "./CategoryList.css";
import { NavLink } from "react-router-dom";

function CategoryList() {
    return (
    <nav>
        <ul className="category-list">
        <li>
            <NavLink activeClassName="active-navlink" to="/category/sweaters">Sweaters</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active-navlink" to="/category/pantalones">Pantalones</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active-navlink" to="/category/complementos">Complementos</NavLink>
        </li>
        </ul>
    </nav>
    );
}

export default CategoryList;
