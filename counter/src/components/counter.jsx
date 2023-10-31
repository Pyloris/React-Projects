import React from 'react';
import { useState } from 'react';


export const Counter = () => {
    const [state, setState] = useState(0);
    const inc = (prev) => prev+1;
    return (
        <div>
            <button onClick={() => setState(state+1)}>Click Me {state}</button>
        </div>
    )
}

// export default Counter;