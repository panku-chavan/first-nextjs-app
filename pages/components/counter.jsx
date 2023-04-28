import { useState } from "react"


export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>

            <button className="m-3 " onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button className="m-3" onClick={() => setCount(count - 1)}>-</button>

        </>
    )
}