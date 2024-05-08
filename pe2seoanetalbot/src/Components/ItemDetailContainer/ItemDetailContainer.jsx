
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../Mock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    getProductById(parseInt(id))
        .then((data) => setItem(data))
        .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading) {
    return <h1>Cargando detalle del producto...</h1>;
    }

    return (
    <div>
        {item ? (
        <ItemDetail item={item} />
        ) : (
        <h1>Producto no encontrado</h1>
        )}
    </div>
    );
}

export default ItemDetailContainer;