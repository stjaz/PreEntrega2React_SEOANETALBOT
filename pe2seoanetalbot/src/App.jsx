

import "./App.css";
import Layout from "./Components/Layout/Layout";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
    <BrowserRouter>
		<Layout>
        <Routes>
			<Route path="/" element={<ItemListContainer saludo={"Bienvenidos!!"} />} />
			<Route path="/category/:id" element={<ItemListContainer />} /> 	
			<Route path="/item/:id" element={<ItemDetailContainer />} /> 
			<Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
		</Layout>
    </BrowserRouter>
	);
}

export default App;
