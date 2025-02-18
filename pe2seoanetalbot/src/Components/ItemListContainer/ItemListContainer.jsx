import ItemList from "../ItemList/ItemList";
import useProducts from "../../Hooks/useProducts";
import useProduct from "../../Hooks/useProduct";

function ItemListContainer({ saludo }) {
        const { isLoading: productsLoading, products } = useProducts();
        const { product, isLoading: porduct4Loading } = useProduct(4);
        if (productsLoading) return <h1>Cargando...</h1>;

    return (
    <div>
        <h1>{saludo}</h1>
        <ItemList products={products} />
    </div>
    );
}

export default ItemListContainer;