import { useState } from "react";

const State = (prop) => {
    const [num,setNum] = useState(10)
    return(
        <>
        <h1>The number is {num}</h1>
        <button onClick={()=>setNum(100)}>Click to Change the number</button>
        </>
    )
}
export default State;