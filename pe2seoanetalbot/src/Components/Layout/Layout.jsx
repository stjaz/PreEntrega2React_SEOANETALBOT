import Brand from "../Brand/Brand";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Layout.css"

export default function Layout ({children}) {
    return (
        <div className="layout-contenedor">
            <div className="header-contenedor">
                <Brand />
                <NavBar/>
            </div>
            <main className="main-contenedor">{children}</main>
            <Footer/>
        </div>
    )
}