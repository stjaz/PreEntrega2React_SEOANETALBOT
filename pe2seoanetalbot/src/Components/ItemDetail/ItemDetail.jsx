import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../Mock/asyncMock";

const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    getProductById(parseInt(id))
        .then((data) => {
        setProduct(data);
        setLoading(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }, [id]);

    return (
    <div>
        {loading ? (
        <p>Loading...</p>
        ) : product ? (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
            <p>Stock: {product.stock}</p>
        </div>
        ) : (
        <p>Product not found</p>
        )}
    </div>
    );
};

export default ItemDetail;