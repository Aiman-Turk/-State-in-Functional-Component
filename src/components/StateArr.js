import { useState } from "react";

const StateArr = (prop) => {
    return (
        <>
            <h1>Friends : <br /> {prop.Array.map((item) =>
                <>
                    <li>
                        {item}
                    </li>
                </>
            )} </h1>
        </>
    )
}
export default StateArr;