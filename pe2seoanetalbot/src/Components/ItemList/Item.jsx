import useCount from "../../Hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

export default function Item({ item }) {
    const { count, increment, decrement } = useCount(0);

    const onAdd = (nombreDeItem, cantidadaLlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadaLlevar: ", cantidadaLlevar);
    };

    return (
    <div className="item-contenedor">
        <div className="item-img-contenedor">
            <img className="item-img" src={item.image} alt={item.title} />
        </div>
        <h2 className="item-title">{item.title}</h2>
        <p className="item-desc">{item.description}</p>
        <p className="item-price">${item.price}</p>
        <div className="itemcounter-contenedor">
            <ItemCount
            stock={item.stock}
            count={count}
            increment={increment}
            decrement={decrement}
            />
        </div>
        <div className="itemcart-contenedor">
            <button
                className="itemcart-button"
                onClick={() => onAdd(item, count)}
            >
                Add to cart
            </button>
        </div>
    </div>
    );
}
