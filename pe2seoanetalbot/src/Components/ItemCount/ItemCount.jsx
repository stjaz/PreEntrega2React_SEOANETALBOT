import "./ItemCount.css";

export default function ItemCount({ stock, count, increment, decrement }) {
    return (
    <div className="itemcount-contenedor">
        <div className="counter-contenedor">
            <button
                className="itemcount-button"
                onClick={decrement}
                disabled={count <= 0}
            >
                -
            </button>
            <span className="itemcount-button">{count}</span>
            <button
                className="itemcount-button"
                onClick={increment}
                disabled={count >= stock}
            >
                +
            </button>
        </div>
    </div>
    );
}