import React, {useState} from 'react';
import '../index.css';

function Button() {
    const[count ,setCount] = useState(0);
   
    const increment = ()=> {
        setCount(count+1);
        console.log(count + 1);

    }
    return(
      <>
      <p>Stateless Example</p>
      <p>Count: {count}</p>
      <button onClick={increment} className="button">Click </button>
      </>
    );
}
export default Button;