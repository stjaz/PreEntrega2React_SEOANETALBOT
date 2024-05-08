import "./Brand.css";
import {NavLink} from "react-router-dom";

function Brand () {
    return (
        <div >
            <NavLink to={"/"}><h1 className="brand">Ihre</h1></NavLink>
        </div>
    );
}

export default Brand