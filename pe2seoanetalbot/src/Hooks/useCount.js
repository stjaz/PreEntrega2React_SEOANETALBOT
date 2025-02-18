import { useState } from "react";

export default function useCount(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
    setCount((estadoAnterior) => estadoAnterior + 1);
    setCount((estadoAnterior) => estadoAnterior + 1);
    };

    const decrement = () => {
    setCount(count - 1);
    };

    return { count, increment, decrement };
}