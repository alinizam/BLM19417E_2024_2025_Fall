import React,{useState} from 'react'

export default function Counter() {
    const [countState,setCountState]=useState(0);

    const handleInc=()=>{setCountState(countState+1)}
    const handleDec=()=>{setCountState(countState-1)}
    return (
    <div>
        <button onClick={handleInc}>+</button>
        {countState}
        <button onClick={handleDec}>-</button>
    </div>
  )
}
