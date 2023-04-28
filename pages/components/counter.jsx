import { useState } from "react"


export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>

            <button className="m-3 rounded-md bg-white text-black p-2 " onClick={() => {
                if (count === 10) {
                    return;
                }
                setCount(count + 1)
            }}>Increament</button>
            {count}
            <button className="m-3 rounded-md bg-white text-black p-2" onClick={() => {
                if (count === 0) {
                    return;
                }
                setCount(count - 1)
            }}>Decreament</button>

        </>
    )
}